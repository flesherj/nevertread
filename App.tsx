import React from 'react';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { Provider as PaperProvider, Surface } from 'react-native-paper';

import Amplify from 'aws-amplify';
// @ts-ignore
import config from './aws-exports';
// @ts-ignore
import { withAuthenticator } from 'aws-amplify-react-native';

Amplify.configure(config);
import { API } from 'aws-amplify';


import theme from './Theme';
import store from './redux/NeverTreadStore';
import { Feed } from './features/feed/Feed';
import { ItemsRepository } from './client/ItemsRepository';

// JDF: Fix me
// @ts-ignore
const itemRepo: ItemsRepository = new ItemsRepository(API);

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <PaperProvider theme={theme}>
                    <Surface style={styles.container}>
                        <Feed />
                    </Surface>
                </PaperProvider>
            </Provider>
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
