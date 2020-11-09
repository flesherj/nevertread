import {APIClass} from "@aws-amplify/api/src/API";

export class ItemsRepository {
    private API: APIClass;

    constructor(API: APIClass) {
        this.API = API;
    }

    public getItems = async () => {
        console.log('test');
        // @ts-ignore
        const result = await this.API.get('nevertreadApi', '/items', null);
        console.log('result', result);
        return result;
    };
}
