import React from 'react';
import { RestAPIClass } from '@aws-amplify/api-rest/src/RestAPI';
import { PostData } from '../features/post/Post';

export const ItemRepoContext = React.createContext({} as ItemsRepository);
export const ItemRepoProvider = ItemRepoContext.Provider;

export class ItemsRepository {
    private API: RestAPIClass;

    constructor(API: RestAPIClass) {
        this.API = API;
    }

    public getItems = async (): Promise<Array<PostData>> => {
        const result: Array<any> = await this.API.get('nevertreadApi', '/items', null);

        const posts: Array<PostData> = new Array<PostData>();

        console.log('api result', result);

        result.forEach((item) => {
            posts.push(this.convertToPostData(item));
        });

        return posts;
    };

    private convertToPostData = (apiResponse: any): PostData => {
        return {
            id: apiResponse.id,
            postedBy: apiResponse.postedBy,
            timestamp: apiResponse.timestamp,
            commentCount: apiResponse.commentCount ? apiResponse.commentCount : 0,
            reactionCount: apiResponse.reactionCount ? apiResponse.reactionCount : 0,
            shareCount: apiResponse.shareCount ? apiResponse.shareCount : 0,
            content: apiResponse.content,
            image: apiResponse.image,
        } as PostData;
    };
}
