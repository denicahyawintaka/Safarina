import React, {Component} from 'react';
import{
    View,
    StyleSheet,
}from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Card from '../components/Akun/Card'
import colors from '../styles/colors';
import { Button, Text } from 'native-base';



export default class AkunContainer extends Component{
    
 
      

    static navigationOptions = {
        header: null,
        tabBarLabel: 'Akun',
        tabBarIcon: ({ tintColor }) => (
            <Icon
             name="md-person"
             size={22}
             color={tintColor}
        
             />
        )
      }
    render(){
        return(
          <View style={styles.container}>
            <Card
            handleButtonPress={() => this.props.navigation.navigate('Voucher')}
            
                text="Voucher Saya"
            />
            <Card
               handleButtonPress={() => this.props.navigation.navigate('PoinReward')}
                text="Poin Reward"
            />
            <Card
                handleButtonPress={() =>  {
                    alert('You tapped the button!');
                }}
                text="Bahasa dan Mata Uang"
            />
            <Card
                handleButtonPress={() => {
                    alert('You tapped the button!');
                }}
                text="Inbox"
            />
            <Card
                handleButtonPress={() => this.props.navigation.navigate('PusatBantuan')}
                text="Pusat Bantuan"
            />
            <Button block  
                backgroundColor={colors.surface}
                onPress={() => {
                    alert('You tapped the button!');
                }}
            >
                <Text style={styles.buttonText}>LOGOUT</Text>
            </Button>
          </View>
          
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      padding:16,
      marginTop: 169,
    },
    buttonText:{
        color:colors.primary,
        fontSize:14,
        fontWeight:'500'
      },
});