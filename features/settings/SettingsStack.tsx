import React from 'react';
import { SettingsScreen } from './SettingsScreen';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export const SettingsStack: React.FC = ({ navigation }) => {
    return (
        <Stack.Navigator initialRouteName={'Feed'}>
            <Stack.Screen name={'Feed'} component={SettingsScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};