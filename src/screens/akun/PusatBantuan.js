import React, {Component} from 'react';
import{
    View,
    StyleSheet,
}from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Card from '../../components/Akun/Card'
import colors from '../../styles/colors';
import { Button, Text } from 'native-base';

export default class AkunContainer extends Component{
    static navigationOptions={
        tabBarLabel: 'Akun',
        tabBarIcon: ({ tintColor }) => (
            <Icon
             name="md-person"
             size={22}
             color={tintColor}
        
             />
        ),
    };
    render(){
        return(
          <View style={styles.container}>
            <View
            style={styles.subContainer}
            >
                <Card
                    text="Explore"
                />
                <Card
                    text="Wish List"
                />
                <Card
                    text="Order"
                />
                <Card
                    text="Akun"
                />
            </View>
            
            <View
                style={styles.button}
            >
                <Text style={styles.buttonText}>CHAT</Text>
            </View>
          </View>
          
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    subContainer:{
        padding:16
    },
    button:{
        width:'100%',
        padding:18,
        backgroundColor:colors.surface,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        position:'absolute',
        bottom:0,
        elevation:10,
        alignItems: 'center',
    
    },
    buttonText:{
        color:colors.primary,
        fontSize:14,
        fontWeight:'500'
      },
});