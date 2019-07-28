import { BaseEntity, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import moment from 'moment';

export class Base extends BaseEntity {
    @CreateDateColumn({
        transformer: {
            to: value => value,
            from: value =>
                moment(value)
                    .locale('kr')
                    .format('YYYY-MM-DD HH:mm:ss'),
        },
    })
    createdAt!: string;
    @UpdateDateColumn({
        transformer: {
            to: value => value,
            from: value =>
                moment(value)
                    .locale('kr')
                    .format('YYYY-MM-DD HH:mm:ss'),
        },
    })
    updatedAt!: string;
}
