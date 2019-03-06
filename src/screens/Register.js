import React, {Component} from 'react';
import colors from '../styles/colors';
import {
    StyleSheet,Image,View, ScrollView, TouchableOpacity
  
} from 'react-native';


import { Form, Button, Text } from 'native-base';
import FloatingInput from '../components/Form/FloatingInput';

export default class Login extends Component{
  state = {
    email: '',
    password: '',
    noHp: '',
  };

  static navigationOptions = {
    header: null
  }

  handleEmailChange = (newText) => this.setState({email: newText});
  handlePasswordChange = (newText) => this.setState({password: newText});
  handleNoHpChange = (newText) => this.setState({noHp: newText});

    render() {
     return (
      <ScrollView style={styles.wrapper} >
        <View  style={styles.logowrapper}>
        <Image
          style={styles.logo}
          source={require('../img/Logo.png')}
        />
        </View>

        <Form style={styles.inputWrapper}>
          <FloatingInput
            marginBottom={18}
            label="Email"
            value={this.state.email}
            onChangeText={this.handleEmailChange}  
          />
           <FloatingInput
            marginBottom={18}
            label="No. Handphone"
            value={this.state.noHp}
            onChangeText={this.handleNoHpChange}  
          />
          <FloatingInput
            label="Password"
            secureTextEntry={true}
            value={this.state.password}
            onChangeText={this.handlePasswordChange}    
          />
        </Form>
       

      <Button block 
          backgroundColor={colors.primary}
          style={[{marginBottom:10},styles.buttonWrapper]}>
          <Text style={styles.buttonText}>Register</Text>
      </Button>
        
      <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.bottomText} >Belum punya akun? </Text> 
        
        <TouchableOpacity
         onPress={() => this.props.navigation.navigate('Login')}>
          <Text style={[styles.bottomText,{color: colors.primary, textDecorationLine: 'underline'}]}>Login</Text>
        </TouchableOpacity>
      </View>
  
    </ScrollView>
       );
       
    }
}

// Later on in your styles..
const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: colors.background,
      },
    logo: {
      justifyContent: 'center',
      alignItems: 'center',
      height: 100, 
      width: 130,
      resizeMode: "stretch"
    },
    logowrapper: {
      marginTop:70,
      justifyContent: 'center',
      alignItems: 'center',
 
    },
    buttonWrapper:{
      borderRadius: 3,
      marginLeft:77,
      marginRight: 78,
    },
    buttonText:{
      fontSize:14,
      fontWeight:'500'
    },
    inputWrapper: {
      marginTop:50,
      marginLeft:55,
      marginRight: 55,
      marginBottom:50
      },
    lupaPassword:{
      textAlign: 'right',
      fontStyle: 'italic',
      textDecorationLine: 'underline',
      fontSize:12,
    },
    bottomText:{
      fontSize:14,
      fontWeight: 'normal',
      color:colors.onBackground,
    }
 
  });