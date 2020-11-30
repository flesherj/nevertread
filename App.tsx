import 'react-native-gesture-handler';

import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Provider as ReduxProvider } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Amplify, { Auth } from 'aws-amplify';
// @ts-ignore
import config from './aws-exports';
// @ts-ignore
import { withAuthenticator } from 'aws-amplify-react-native';

Amplify.configure(config);
import { API } from 'aws-amplify';

import theme from './Theme';
import store from './redux/NeverTreadStore';

import { ItemRepoProvider, ItemsRepository } from './client/ItemsRepository';
import { FeedStack } from './features/feed/FeedStack';
import { SettingsStack } from './features/settings/SettingsStack';
import { createStackNavigator } from '@react-navigation/stack';
import { CreatePostScreen } from './features/post/CreatePost';

// JDF: Fix me
// @ts-ignore
const itemRepo: ItemsRepository = new ItemsRepository(API);

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack: React.FC = ({ _navigation }) => {
    return (
        <Tab.Navigator
            labeled={false}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color }) => {
                    let iconName = 'home';

                    if (route.name === 'Feed') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'Settings') {
                        iconName = focused ? 'menu' : 'menu';
                    }
                    return <MaterialCommunityIcons name={iconName} size={20} color={color} />;
                },
            })}
        >
            <Tab.Screen name={'Feed'} component={FeedStack} />
            <Tab.Screen name={'Settings'} component={SettingsStack} />
        </Tab.Navigator>
    );
};

const RootStack: React.FC = ({ _navigation }) => {
    return (
        <Stack.Navigator mode={'modal'} headerMode={'none'}>
            <Stack.Screen name={'Home'} component={HomeStack} />
            <Stack.Screen name={'Create Post'} component={CreatePostScreen} />
        </Stack.Navigator>
    );
};

class App extends React.Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <PaperProvider theme={theme}>
                    <NavigationContainer theme={theme}>
                        <ReduxProvider store={store}>
                            <ItemRepoProvider value={itemRepo}>
                                <RootStack />
                            </ItemRepoProvider>
                        </ReduxProvider>
                    </NavigationContainer>
                </PaperProvider>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
    },
});

export default withAuthenticator(App, false);
