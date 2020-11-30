import React, { useContext } from 'react';
import { ItemRepoContext, ItemsRepository } from '../../client/ItemsRepository';
import { Feed } from './Feed';
import { Button, Surface } from 'react-native-paper';
import { SafeAreaView } from 'react-native';

export const FeedScreen: React.FC = ({ navigation }) => {
    const itemRepo: ItemsRepository = useContext(ItemRepoContext);
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Surface  style={{ flex: 1 }}>
                <Button onPress={() => navigation.navigate('Create Post', null)}>Test</Button>
                <Feed itemApi={itemRepo} />
            </Surface>
        </SafeAreaView>
    );
};
