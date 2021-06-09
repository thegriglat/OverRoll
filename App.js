import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Header';

export default function App() {
  let heroes = ["ana", "moira"];
  return (
    <View style={[styles.container, {
      flexDirection: "column"
    }]}>
      <View style={{ flex: 1, backgroundColor: "lightblue", "justify-content":"center" }}>
        <Header></Header>
      </View>
      <View style={{ flex: 9, backgroundColor: "white","justify-content":"center" }}>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: "5px",
  },
});
