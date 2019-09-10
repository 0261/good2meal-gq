import { DocumentClient } from 'aws-sdk/clients/dynamodb';
import {
    Expression,
    set,
    UpdateExpression,
} from '@typemon/dynamodb-expression';
import { Service } from 'typedi';
import moment from 'moment';
import { AWSError } from 'aws-sdk/lib/error';

type TableName = 'good2meal';

interface Tables {
    good2meal: {
        primaryKey: 'location';
    };
}

interface Option {
    Limit?: number;
    ScanIndexForward?: boolean;
    ExclusiveStartKey?: { [key: string]: any };
}

@Service()
export class DynamoDB {
    private readonly client: DocumentClient;
    constructor() {
        this.client = new DocumentClient({
            region: 'ap-northeast-2',
        });
    }
    public async put(
        tableName: TableName,
        data: Tables[TableName],
    ): Promise<DocumentClient.PutItemOutput | AWSError> {
        try {
            const item = this.changeEmptyStringToDefaultValue(data);
            item.createdDate = moment()
                .locale('kr')
                .format();
            item.updatedDate = moment()
                .locale('kr')
                .format();
            const parameter = {
                TableName: tableName,
                Item: item,
                ReturnValues: 'ALL_OLD',
            };
            // console.log('put:', parameter);
            const result = await this.client.put(parameter).promise();

            /**
             * @link https://docs.aws.amazon.com/ko_kr/amazondynamodb/latest/developerguide/WorkingWithItems.html
             * ReturnValues: ALL_OLD
             * 기존 항목을 덮어쓰면 ALL_OLD는 덮어쓰기 전에 나타난 전체 항목을 반환합니다.
             * 존재하지 않는 항목을 쓰면 ALL_OLD는 효과를 나타내지 않습니다.
             */
            return result;
        } catch (error) {
            throw new Error(error);
        }
    }
    public async get(
        tableName: TableName,
        primaryKey: DocumentClient.Key,
    ): Promise<any> {
        try {
            const parameter = {
                TableName: tableName,
                Key: primaryKey,
            };
            console.log('get:', parameter);
            const result: DocumentClient.GetItemOutput = await this.client
                .get(parameter)
                .promise();

            return result.Item as any;
        } catch (error) {
            console.log('get', error);
            throw new Error(error);
        }
    }
    public async query(
        tableName: TableName,
        keyConditionExpression: Expression,
        filterExpression?: Expression,
        option?: Option,
        index?: string,
        exclusiveStartKey?: any,
    ): Promise<DocumentClient.QueryOutput> {
        try {
            const parameter: DocumentClient.QueryInput = {
                TableName: tableName,
                KeyConditionExpression: keyConditionExpression.expression,
                ExpressionAttributeNames: Object.assign(
                    keyConditionExpression.names,
                    filterExpression ? filterExpression.names : undefined,
                ),
                ExpressionAttributeValues: Object.assign(
                    keyConditionExpression.values,
                    filterExpression ? filterExpression.values : undefined,
                ),
                FilterExpression: filterExpression
                    ? filterExpression.expression
                    : undefined,
                IndexName: index ? index : undefined,
                ...option,
            };
            console.log('query:', parameter);
            const result: DocumentClient.QueryOutput = await this.client
                .query(parameter)
                .promise();
            return result;
        } catch (error) {
            console.log('query', error);
            throw new Error(error);
        }
    }
    public async update(
        tableName: TableName,
        key: DocumentClient.Key,
        updatePayload: { [key: string]: any },
    ): Promise<DocumentClient.UpdateItemOutput> {
        try {
            const expressionData = UpdateExpression.build(
                Object.keys(updatePayload).map(key =>
                    set(key, updatePayload[key]),
                ),
            );
            const parameter: DocumentClient.UpdateItemInput = {
                TableName: tableName,
                Key: key,
                UpdateExpression: expressionData.expression,
                ExpressionAttributeNames: expressionData.names,
                ExpressionAttributeValues: expressionData.values,
                ReturnValues: 'ALL_OLD',
            };
            console.log('update:', parameter);
            return await this.client.update(parameter).promise();
        } catch (error) {
            console.log('update', error);
            throw new Error(error);
        }
    }
    private changeEmptyStringToDefaultValue(item: Array<any> | any) {
        const serializedItem: any = item.length > 0 ? [] : {};
        for (const [key, value] of Object.entries(item)) {
            serializedItem[key] =
                typeof value === 'object'
                    ? value === null
                        ? value
                        : this.changeEmptyStringToDefaultValue(value)
                    : value === ''
                    ? undefined
                    : value;
        }
        return serializedItem;
    }
}
