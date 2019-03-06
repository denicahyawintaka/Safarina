import React, {Component} from 'react';
import{
    View,
    Text,
    StyleSheet,
}from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

export default class AkunContainer extends Component{
    static navigationOptions={
        tabBarLabel: 'Order',
        tabBarIcon: ({ tintColor }) => (
            <MaterialIcon
             name="list-alt"
             size={22}
             color={tintColor}
             />
        ),
    } ;
    render(){
        return(
            <View>
                <Text>Order Container</Text>
            </View>
        );
    }
}