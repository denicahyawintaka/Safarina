import React, {Component} from 'react';
import AppTabNavigator from '../navigators/AppTabNavigator';
import {
  
} from 'react-native';

export default class Main extends Component{
    static navigationOptions = {
        header: null
      }
    render(){
        return (
            <AppTabNavigator />
        );
    }
}

