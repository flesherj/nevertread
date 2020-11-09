import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import Amplify from 'aws-amplify';
// @ts-ignore
import config from './aws-exports';
// @ts-ignore
import { withAuthenticator } from 'aws-amplify-react-native';
import { ItemsRepository } from './client/ItemsRepository';

Amplify.configure(config);
import { API } from 'aws-amplify';

// @ts-ignore
const itemRepo: ItemsRepository = new ItemsRepository(API);

function App() {
    return (
        <View style={styles.container}>
            <Text>Open up App.tsx to start working on your app!</Text>
            <Button title={'Test'} onPress={itemRepo.getItems} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default withAuthenticator(App, true);
