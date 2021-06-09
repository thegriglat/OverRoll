import React from 'react';
import { StyleSheet, View, Image, Button } from 'react-native';
import Header from './Header';

const ana = require('./assets/ana.png');

export default function App() {
  let heroes = ["ana", "moira"];
  return (
    <View style={[styles.container, {
      flexDirection: "column"
    }]}>
      <View style={{ flex: 1, backgroundColor: "lightblue", justifyContent: "center" }}>
        <Header></Header>
      </View>
      <View style={{ flex: 8, backgroundColor: "white", justifyContent: "center", alignItems: "center" }}>
        <Image source={ana} style={{ maxWidth: "100%", maxHeight: "100%", height: "100%", width:"100%", justifyContent: "center" }} />
      </View>
      <View style={{ flex: 1, backgroundColor: "white", justifyContent: "center" }}>
        <Button style={{borderRadius:10}} title="Roll!"/>
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
