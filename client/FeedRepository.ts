import { RestAPIClass } from '@aws-amplify/api-rest/src/RestAPI';

export class FeedRepository {
    private API: RestAPIClass;

    constructor(API: RestAPIClass) {
        this.API = API;
    }
}