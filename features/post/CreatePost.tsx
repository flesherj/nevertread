import React from 'react';
import { Surface, TextInput, IconButton, Colors } from 'react-native-paper';
import { ScrollView, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/NeverTreadStore';
import { setHeight } from './CreatePostSlice';

export const CreatePostScreen: React.FC = ({ navigation }) => {
    return (
        <Surface style={{ flex: 1 }}>
            <ScrollView keyboardDismissMode={'interactive'} contentContainerStyle={{flex: 1, justifyContent: 'space-between'}} style={{}} >
                <Surface style={{ flex: 1 }}>
                    <Surface style={{ flexDirection: 'row', justifyContent:'space-between' }}>
                        <Surface style={{ }}>
                            <IconButton icon={'close'} onPress={() => navigation.goBack()} />
                        </Surface>
                        <Surface style={{ }}>
                            <IconButton icon={'plus'} onPress={() => navigation.goBack()} style={{alignSelf: 'flex-end'}} />
                        </Surface>
                    </Surface>
                    <CreatePost />
                </Surface>
            </ScrollView>
        </Surface>
    );
};

export const CreatePost: React.FC = () => {
    const dispatch = useDispatch();
    const textHeight: number = useSelector((state: RootState) => state.createPost.height);
    console.log('text height', textHeight);
    return (
        <Surface
            style={{ flex: 1}}
            onLayout={(ev) => {
                const fullHeight = ev.nativeEvent.layout.height;
                console.log('full height', fullHeight);
                dispatch(setHeight(fullHeight));
            }}
        >
            <ScrollView>
            <TextInput
                style={{ flex: 1, height: textHeight, textAlignVertical: 'top', alignSelf: 'stretch' }}
                placeholder={`What's on your mind?`}
                multiline={true}
            />
            </ScrollView>
        </Surface>
    );
};
