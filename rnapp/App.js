import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import {createMaterialTopTabNavigator} from 'react-navigation'



const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

function sortDate() { }


class All extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          all: [],
          faves: []
        };

        //--------------------------------------------------------------
        Promise.all([client.searchWines(), client.searchStores(), ...]).then(array => {
            let all = wines + stores + ..
            let faves = all.filter(item => item.isFavorite);
            this.setState({all, faves})
        });

        //--------------------------------------------------------------
      }

  render() {
    const {all, faves} = this.state;
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>All</Text>
        <FlatList data={all}
          renderItem={({item}) => <Text>{item.key}</Text>} />
      </View>
    );
  }
}

// Mostly the same for Favorites
class Favorites extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Favorites</Text>
      </View>
    );
  }
}



export default createMaterialTopTabNavigator({
      All: { screen: All },
      Favorites : { screen: Favorites }, {
      initialRouteName: 'All',
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  touchable: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 50,
    margin:5
  },
  touchablecontainer: {
    flexDirection: 'row'
  }
});
