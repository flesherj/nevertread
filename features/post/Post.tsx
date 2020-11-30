import moment from 'moment';
import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { Card, Title, Paragraph, IconButton, Badge, Text, Surface, Colors } from 'react-native-paper';
import { ItemsRepository } from '../../client/ItemsRepository';

export interface PostData {
    id: string;
    postedBy: string;
    timestamp: Date;
    content: string;
    commentCount: number;
    reactionCount: number;
    shareCount: number;
    image?: string;
}

export interface PostProps {
    id: string;
    postedBy: string;
    timestamp: Date;
    content: string;
    image?: string;
    commentCount: number;
    reactionCount: number;
    shareCount: number;
    itemRepo: ItemsRepository;
    onAddReaction: Function;
}

export const Post: React.FC<PostProps> = (props: PostProps) => {
    console.log('loading post', props);

    const onAddComment = async (postId: string): Promise<void> => {
        console.log('Adding Comment', postId);
    };

    const onSharePost = async (postId: string): Promise<void> => {
        console.log('Share Post', postId);
    };

    return (
        <Surface>
            <Card style={styles.postContainer}>
                <Card.Content>
                    <Title>{props.postedBy}</Title>
                    <Text>{moment(props.timestamp).fromNow()}</Text>
                    <Paragraph>{props.content}</Paragraph>
                    {props.image ? (
                        <Image
                            style={{ width: 512, height: 640, flex: 1, backgroundColor: Colors.grey500 }}
                            source={{ uri: props.image }}
                            resizeMode={'contain'}
                        />
                    ) : null}
                </Card.Content>
                <Card.Actions>
                    <IconButton icon={'emoticon'} onPress={() => props.onAddReaction(props.id)} />
                    <Badge visible={props.reactionCount}>{props.reactionCount}</Badge>
                    <IconButton icon={'comment-text'} onPress={() => onAddComment(props.id)} />
                    <Badge visible={props.commentCount}>{props.commentCount}</Badge>
                    <IconButton icon={'share'} onPress={() => onSharePost(props.id)} />
                    <Badge visible={props.shareCount}>{props.shareCount}</Badge>
                </Card.Actions>
            </Card>
        </Surface>
    );
};

const styles = StyleSheet.create({
    postContainer: {
        marginBottom: 8,
    },
});
