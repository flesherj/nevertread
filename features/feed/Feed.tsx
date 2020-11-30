import React, { useEffect } from 'react';
import { SafeAreaView, FlatList, StyleSheet } from 'react-native';
import { Surface, Text } from 'react-native-paper';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/NeverTreadStore';
import { Post, PostData } from '../post/Post';
import { ItemsRepository } from '../../client/ItemsRepository';
import { addPostsFromFeed, incrementReactionCount } from './FeedSlice';

export interface FeedProps {
    itemApi: ItemsRepository;
}

export const Feed: React.FC<FeedProps> = (props: FeedProps)  => {
    const dispatch = useDispatch();
    const posts: Array<PostData> = useSelector((state: RootState) => state.feed.posts);

    useEffect(() => {
        dispatch(onLoadFeed);
    }, []);

    const onLoadFeed = async (): Promise<void> => {
        const result: Array<PostData> = await props.itemApi.getItems();
        dispatch(addPostsFromFeed(result));
    };

    const onAddReaction = async (postId: string): Promise<void> => {
        console.log('Adding Reaction To Post', postId);
        dispatch(incrementReactionCount(postId));
    };

    return (
        <SafeAreaView style={styles.container}>
            <Surface style={{ flex: 1 }}>
                <Text>My Feed</Text>
                <Text>{posts.length}</Text>
                <FlatList
                    data={posts}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <Post
                            id={item.id}
                            postedBy={item.postedBy}
                            timestamp={item.timestamp}
                            content={item.content}
                            commentCount={item.commentCount}
                            reactionCount={item.reactionCount}
                            shareCount={item.shareCount}
                            image={item.image}
                            itemRepo={props.itemApi}
                            onAddReaction={onAddReaction}
                        />
                    )}
                />
            </Surface>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
