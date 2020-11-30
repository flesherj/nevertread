import React, { useContext } from 'react';
import { ItemRepoContext, ItemsRepository } from '../../client/ItemsRepository';
import { Surface, Text } from 'react-native-paper';
import { SafeAreaView } from 'react-native';

export const SettingsScreen: React.FC = ({ navigation }) => {
    const itemRepo: ItemsRepository = useContext(ItemRepoContext);
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Surface  style={{ flex: 1 }}>
                <Text>Settings Screen</Text>
            </Surface>
        </SafeAreaView>
    );
};
