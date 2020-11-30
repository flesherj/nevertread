import 'react-native-gesture-handler';

import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { Provider as PaperProvider, IconButton } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
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

// JDF: Fix me
// @ts-ignore
const itemRepo: ItemsRepository = new ItemsRepository(API);

const Tab = createBottomTabNavigator();

class App extends React.Component {
    render() {
        return (
            <NavigationContainer>
                <Provider store={store}>
                    <PaperProvider theme={theme}>
                        <ItemRepoProvider value={itemRepo}>
                            <Tab.Navigator tabBarOptions={{ showLabel: false }} screenOptions={({ route }) => ({
                                tabBarIcon: ({ focused, color, size }) => {
                                    let iconName = 'home';

                                    if (route.name === 'Feed') {
                                        iconName = focused ? 'home' : 'home-outline';
                                    } else if (route.name === 'Settings') {
                                        iconName = focused ? 'menu' : 'menu';
                                    }

                                    // You can return any component that you like here!
                                    return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
                                },
                            })}>
                                <Tab.Screen name={'Feed'} component={FeedStack} />
                                <Tab.Screen name={'Settings'} component={SettingsStack} />
                            </Tab.Navigator>
                        </ItemRepoProvider>
                    </PaperProvider>
                </Provider>
            </NavigationContainer>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
    },
});

export default withAuthenticator(App, true);
