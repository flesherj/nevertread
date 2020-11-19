import React from 'react';
import { SafeAreaView, FlatList, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/NeverTreadStore';
import { Post, PostData } from '../post/Post';

export const Feed: React.FC = () => {
    const dispatch = useDispatch();
    const posts: Array<PostData> = useSelector((state: RootState) => state.feed.posts);
    console.log(posts);

    const onAddReaction = async (postId: string): Promise<void> => {
        console.log('Adding Reaction', postId);
    };

    const onAddComment = async (postId: string): Promise<void> => {
        console.log('Adding Comment', postId);
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text>My Feed</Text>
            <Text>{posts.length}</Text>
            <FlatList
                data={posts}
                renderItem={({ item }) => (
                    <Post
                        id={item.id}
                        timestamp={item.timestamp}
                        content={item.content}
                        commentCount={item.commentCount}
                        image={item.image}
                        onAddReaction={onAddReaction}
                        onAddComment={onAddComment}
                    />
                )}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
