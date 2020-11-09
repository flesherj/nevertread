import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Amplify from "aws-amplify";
// @ts-ignore
import config from "./aws-exports";
// @ts-ignore
import { withAuthenticator } from "aws-amplify-react-native";

Amplify.configure(config);

function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
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

export default withAuthenticator(App, true)

