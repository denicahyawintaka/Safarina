import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Image,
  StatusBar, 
  Dimensions,
  
} from 'react-native';
import {  Button, Text } from 'native-base';

import Swiper from 'react-native-swiper';
import colors from '../styles/colors';

console.disableYellowBox = true;

const { width: SCREEN_WIDTH } = Dimensions.get("screen");

export default class Intro extends Component {
  static navigationOptions = {
    header: null
  }
  render(){
    return (
      
      <Swiper
       style={styles.container} 
       paginationStyle={{
          position: 'absolute',
          top:100
      }}
      activeDotStyle={{backgroundColor:colors.primary}}
       >     
        <View style={styles.slide}>
       
          <Image style={styles.image}
            source={require('../img/onBoard1.png')}  

          />
          <View style={styles.subContainer}>
            <Text style={styles.text}>
              Traveling jadi lebih nyaman dengan jaminan 
              <Text style={{fontWeight:'bold'}}> Halal</Text>
            </Text>
        
          </View>

          <Button block
                 style={[styles.button,{bottom:90}]}  
              backgroundColor={colors.primary}
              onPress={() => this.props.navigation.navigate('Login')}
              >
              <Text style={styles.buttonPrimaryText}>LOGIN</Text>
            </Button>
            <Button block
              style={[styles.button,{bottom:32}]}  
              backgroundColor={colors.surface}
              onPress={() => this.props.navigation.navigate('Login')}
            >
              <Text style={styles.buttonSurfaceText}>JELAJAH TANPA LOGIN</Text>
            </Button>     
        </View>

        <View style={styles.slide}>
          <Image style={styles.image}
            source={require('../img/onBoard2.png')}  
          />
          <View style={styles.subContainer}>
            <Text style={styles.text}>
            
            Paket dan informasi tentang <Text style={{fontWeight:'bold'}}> Halal Trip, Halal Guide,</Text> serta <Text style={{fontWeight:'bold'}}> Halal Food </Text> untuk Anda
            </Text>
          </View>
          <Button block
                 style={[styles.button,{bottom:90}]}  
              backgroundColor={colors.primary}
              onPress={() => this.props.navigation.navigate('Login')}
              >
              <Text style={styles.buttonPrimaryText}>LOGIN</Text>
            </Button>
            <Button block
              style={[styles.button,{bottom:32}]}  
              backgroundColor={colors.surface}
              onPress={() => this.props.navigation.navigate('Login')}
            >
              <Text style={styles.buttonSurfaceText}>JELAJAH TANPA LOGIN</Text>
            </Button>
        </View>


        <View style={styles.slide}>
          <Image style={styles.image}
            source={require('../img/onBoard3.png')}  
          />
          <View style={styles.subContainer}>
            <Text style={styles.text}>
            Paket dan informasi tentang <Text style={{fontWeight:'bold'}}> Halal Trip, Halal Guide,</Text> serta <Text style={{fontWeight:'bold'}}> Halal Food </Text> untuk Anda
            </Text>
            
          </View>
          <Button block
                style={[styles.button,{bottom:90}]}  
              backgroundColor={colors.primary}
              onPress={() => this.props.navigation.navigate('Login')}
              >
              <Text style={styles.buttonPrimaryText}>LOGIN</Text>
            </Button>
            <Button block
              style={[styles.button,{bottom:32}]}  
              backgroundColor={colors.surface}
              onPress={() => this.props.navigation.navigate('Login')}
            >
              <Text style={styles.buttonSurfaceText}>JELAJAH TANPA LOGIN</Text>
            </Button>
        </View>
        
      </Swiper>
    
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
  },
  subContainer:{
    paddingLeft:44,
    paddingRight:44,
    position:'absolute',
    bottom:160
  },
  slide: {
    flex: 1,
    height:'100%'

  },
  image:{
    width:SCREEN_WIDTH,
    height:340,
    resizeMode: "stretch",
    marginBottom: 35,

  },
  button:{
  position:'absolute',
  left:0,
  right:0,
	marginLeft:78,
	marginRight:78,
  },
  buttonPrimaryText:{
    fontSize:14,
    fontWeight:'500'
  },
  buttonSurfaceText:{
    color:colors.primary, 
    fontSize:14,
    fontWeight:'500'
  },
  text: {
    color: colors.onBackground,
    fontSize: 12,
    lineHeight:25,
    fontSize:16,
    fontWeight: 'normal',
    textAlign:'center',
    marginBottom:14,
  }
  
})

AppRegistry.registerComponent('myproject', () => Swiper);