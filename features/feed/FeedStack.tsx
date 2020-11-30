import React from 'react';
import { FeedScreen } from './FeedScreen';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export const FeedStack: React.FC = ({ navigation }) => {
    return (
        <Stack.Navigator initialRouteName={'Feed'} >
            <Stack.Screen name={'Feed'} component={FeedScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};