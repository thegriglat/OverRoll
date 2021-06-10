import React from 'react';
import { StyleSheet, View, Image, Button, Text } from 'react-native';

import { getRndHero, getRndHeros } from './Heroes';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hero: getRndHero(), roles: "all", done: false }
  }

  choose(role) {
    this.setState({ done: false });
    const latest = 2000;
    const _l = getRndHeros(role);
    this.setState({ roles: role });
    for (let i = 0; i < _l; i++) {
      setTimeout(() => {
        let h = getRndHero(role);
        this.setState({ hero: h });
        if (i === _l - 1) {
          this.setState({ done: true });
        }
      }, i * latest / _l);
    }
  }
  render() {
    return (
      <View style={[styles.container, {
        flexDirection: "column"
      }]}>
        <View style={{ flex: 1, justifyContent: "center" }}>
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 1, justifyContent: "center" }}>
              <Button style={styles.btn} color={this.state.roles === "tank" ? "#fd8502" : "#2c8cd3"} title="Tanks" onPress={() => {
                this.choose("tank");
              }} />
            </View>
            <View style={{ flex: 1, justifyContent: "center" }}>
              <Button style={styles.btn} color={this.state.roles === "dps" ? "#fd8502" : "#2c8cd3"} title="DPS" onPress={() => {
                this.choose("dps");
              }} />
            </View>
            <View style={{ flex: 1, justifyContent: "center" }}>
              <Button style={styles.btn} color={this.state.roles === "support" ? "#fd8502" : "#2c8cd3"} title="Support" onPress={() => {
                this.choose("support");
              }} />
            </View>
            <View style={{ flex: 1, justifyContent: "center" }}>
              <Button style={styles.btn} color={this.state.roles === "all" ? "#fd8502" : "#2c8cd3"} title="All" onPress={() => {
                this.choose("all")
              }} />
            </View>
          </View>
        </View>
        <View style={{ flex: 8, backgroundColor: this.state.done ? "#fd8502" : "white", justifyContent: "center", alignItems: "center" }}>
          <Image source={this.state.hero.logo} style={styles.img} />
        </View>
        <View style={{ flex: 1, backgroundColor: "white", justifyContent: "center" }}>
          <Button style={{ borderRadius: 10 }} title="Roll!" onPress={() => {
            this.choose(this.state.roles);
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
  },
  img: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
    justifyContent: "center",
  }
});
