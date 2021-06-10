import React from 'react';
import { StyleSheet, View, Image, Button } from 'react-native';
import Header from './Header';

import { getRndHero } from './Heroes';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hero: getRndHero(), roles: "all" }
  }

  choose(role) {
    this.setState({ hero: getRndHero(role), roles: role })
  }
  render() {
    return (
      <View style={[styles.container, {
        flexDirection: "column"
      }]}>
        <View style={{ flex: 1, justifyContent: "center" }}>
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 1, justifyContent: "center" }}>
              <Button style={styles.btn} title="Tanks" onPress={() => {
                this.choose("tank");
              }} />
            </View>
            <View style={{ flex: 1, justifyContent: "center" }}>
              <Button style={styles.btn} title="DPS" onPress={() => {
                this.choose("dps");
              }} />
            </View>
            <View style={{ flex: 1, justifyContent: "center" }}>
              <Button style={styles.btn} title="Support" onPress={() => {
                this.choose("support");
              }} />
            </View>
            <View style={{ flex: 1, justifyContent: "center" }}>
              <Button style={styles.btn} title="All" onPress={() => {
                this.choose("all")
              }} />
            </View>
          </View>
        </View>
        <View style={{ flex: 8, backgroundColor: "white", justifyContent: "center", alignItems: "center" }}>
          <Image source={this.state.hero.logo} style={{ height: "100%", width: "100%", resizeMode: "contain", justifyContent: "center" }} />
        </View>
        <View style={{ flex: 1, backgroundColor: "white", justifyContent: "center" }}>
          <Button style={{ borderRadius: 10 }} title="Roll!" onPress={() => {
            this.setState({ hero: getRndHero(this.state.roles), roles: this.state.roles })
          }} />
        </View>
      </View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: "5px",
  },
  btn: {
    marginLeft: 5,
    marginRight: 5
  }
});
