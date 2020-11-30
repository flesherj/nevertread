import React from 'react';
import { Surface, Text } from 'react-native-paper';
import { SafeAreaView } from 'react-native';

export const CreatePostScreen: React.FC = ({ navigation }) => {
    return (
        <CreatePost />
    );
};

export const CreatePost: React.FC = () => {
    return (
        <SafeAreaView style={{flex:1}}>
            <Surface style={{flex:1}}>
            <Text>{'My Create Post Page'}</Text>
            </Surface>
        </SafeAreaView>
    );
};