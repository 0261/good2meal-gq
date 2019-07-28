import { Resolver, Query } from 'type-graphql';

@Resolver()
export class UserResolver {
    @Query(returns => String, { name: 'getUser' })
    async getUser() {
        return 'getUser';
    }
}
