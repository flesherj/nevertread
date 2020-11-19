import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native';
import { Card, Title, Paragraph, IconButton, Badge, Text, Surface, Colors } from 'react-native-paper';

export interface PostData {
    id: string;
    timestamp: Date;
    content: string;
    commentCount?: number;
    image?: string;
}

export interface PostProps {
    id: string;
    timestamp: Date;
    content: string;
    image?: string;
    commentCount?: number;
    onAddReaction: Function;
    onAddComment: Function;
}

export class Post extends Component<PostProps> {
    render() {
        // @ts-ignore
        // @ts-ignore
        // @ts-ignore
        return (
            <Surface>
                <Card style={styles.postContainer}>
                    <Card.Content>
                        <Title>{this.props.timestamp.toISOString()}</Title>
                        <Paragraph>{this.props.content}</Paragraph>
                        { this.props.image ?
                        <Image
                            style={{ width: 512, height: 640, flex: 1, backgroundColor: Colors.grey500 }}
                            source={{ uri: this.props.image }}
                            resizeMode={'contain'}
                        /> : null }
                    </Card.Content>
                    <Card.Actions>
                        <IconButton icon={'drama-masks'} onPress={() => this.props.onAddComment(this.props.id)} />
                        <IconButton icon={'comment-text'} onPress={() => this.props.onAddReaction(this.props.id)} />
                        <Badge visible={this.props.commentCount}>{this.props.commentCount}</Badge>
                    </Card.Actions>
                </Card>
            </Surface>
        );
    }
}

const styles = StyleSheet.create({
    postContainer: {
        marginBottom: 8,

    },
});
