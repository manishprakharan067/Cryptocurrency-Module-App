/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CryptoCurrencyModule from "./src/components/viewcontrolers/CryptocurrencyModuleUI";

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <CryptoCurrencyModule />
    </View>
  );
};

const styles = StyleSheet.create({});

export default App;
