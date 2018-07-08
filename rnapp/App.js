/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

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



/*
export default class Timer extends Component {
            constructor(props) {
                super(props);
                this.state = {
                    on: false, 
                    time: '00:00:00',
                    sec: 0
                };

                this.start = this.start.bind(this);
                this.stop = this.stop.bind(this);
                this.restart = this.restart.bind(this);
                this.whileOn = this.whileOn.bind(this);
            }

            start() {
                if (!this.state.on){
                  setInterval(this.whileOn, 1000);
                  this.setState({on: true})
                }
                
            }
            stop() {

                this.setState({on: false})

            }
            restart() {
                this.setState({
                    on: false, 
                    time: '00:00:00',
                    sec: 0
                })
            }


            whileOn() {
                if (this.state.on) {
                    let secs = this.state.sec + 1;

                    let hours = Math.floor(secs / (60 * 60));

                    let divisorForMinutes = secs % (60 * 60)
                    let minutes = Math.floor(divisorForMinutes / 60)

                    let divisor_for_seconds = divisorForMinutes % 60

                    let seconds = Math.ceil(divisor_for_seconds)

                    hours = hours.toString()
                    minutes = minutes.toString()
                    seconds = seconds.toString()

                    if (hours.length < 2){
                        hours = "0"+hours
                    }
                    if (minutes.length < 2){
                        minutes = "0"+minutes
                    }
                    if (seconds.length < 2){
                        seconds = "0"+seconds
                    }

                    let newTime = `${hours}:${minutes}:${seconds}`



                    this.setState({
                        sec: secs,
                        time: newTime
                    })

                }

            }

            render() {
              return (
                <View style={styles.container}>
                  <Text>HOUR MIN SEC</Text>
                  <Text>{this.state.time}</Text>                  
                  <View style={styles.touchablecontainer}>
                  <TouchableOpacity style={styles.touchable} onPress={this.start}>
                    <Text>START</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.touchable} onPress={this.stop}><Text>STOP</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.touchable} onPress={this.restart}><Text>RESTART</Text></TouchableOpacity>
                  </View>
                </View>
              )
            }
        }
*/
class Time extends React.Component {
            constructor(props) {
                super(props);
                this.state = {
                    on: false, 
                    time: '00:00:00',
                    sec: 0
                };

                this.start = this.start.bind(this);
                this.stop = this.stop.bind(this);
                this.restart = this.restart.bind(this);
                this.whileOn = this.whileOn.bind(this);
            }

            start() {
                if (!this.state.on){
                  setInterval(this.whileOn, 1000);
                  this.setState({on: true})
                }
                
            }
            stop() {

                this.setState({on: false})

            }
            restart() {
                this.setState({
                    on: false, 
                    time: '00:00:00',
                    sec: 0
                })
            }


            whileOn() {
                if (this.state.on) {
                    let secs = this.state.sec + 1;

                    let hours = Math.floor(secs / (60 * 60));

                    let divisorForMinutes = secs % (60 * 60)
                    let minutes = Math.floor(divisorForMinutes / 60)

                    let divisor_for_seconds = divisorForMinutes % 60

                    let seconds = Math.ceil(divisor_for_seconds)

                    hours = hours.toString()
                    minutes = minutes.toString()
                    seconds = seconds.toString()

                    if (hours.length < 2){
                        hours = "0"+hours
                    }
                    if (minutes.length < 2){
                        minutes = "0"+minutes
                    }
                    if (seconds.length < 2){
                        seconds = "0"+seconds
                    }

                    let newTime = `${hours}:${minutes}:${seconds}`



                    this.setState({
                        sec: secs,
                        time: newTime
                    })

                }

            }

            render() {
              return (
                <View style={styles.container}>
                  <Text>HOUR MIN SEC</Text>
                  <Text>{this.state.time}</Text>                  
                  <View style={styles.touchablecontainer}>
                  <TouchableOpacity style={styles.touchable} onPress={this.start}>
                    <Text>START</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.touchable} onPress={this.stop}><Text>STOP</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.touchable} onPress={this.restart}><Text>RESTART</Text></TouchableOpacity>
                  </View>
                </View>
              )
            }
}

class Alarm extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Alarm</Text>
      </View>
    );
  }
}

class Stopwatch extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Stopwatch</Text>
      </View>
    );
  }
}



export default createMaterialTopTabNavigator({
      Alarm: { screen: Alarm },
      Time : { screen: Time },
      Stopwatch: { screen: Stopwatch }
      }, {
      initialRouteName: 'Time',
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
