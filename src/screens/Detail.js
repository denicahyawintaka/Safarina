import React, { Component } from 'react';
import {
  Animated,
  Dimensions,
  ScrollView,
  StyleSheet,

  View
} from 'react-native';
import { Button,  Text } from 'native-base';
import Location_price from '../components/Detail/Location_price'
import Tiket from '../components/Detail/Tiket'
import Detail_contain from '../components/Detail/Detail_contain'

import colors from '../styles/colors/index';

getListItems = count => {
  const items = [];
  let i = 0;
 
  while (i < count) {
    i++;
    items.push(
      <View key={i} style={{ height: 64 }}>
        <Text style={{ color: '#999' }}>{`List Item ${i}`}</Text>
      </View>
    );
  }
 
  return items;
};

const HEADER_EXPANDED_HEIGHT = 300;
const HEADER_COLLAPSED_HEIGHT = 60;

const { width: SCREEN_WIDTH } = Dimensions.get("screen")

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      scrollY: new Animated.Value(0)
    }
  }

  render() {
    const headerHeight = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_EXPANDED_HEIGHT-HEADER_COLLAPSED_HEIGHT],
      outputRange: [HEADER_EXPANDED_HEIGHT, HEADER_COLLAPSED_HEIGHT],
      extrapolate: 'clamp'
    });
    const headerTitleOpacity = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_EXPANDED_HEIGHT-HEADER_COLLAPSED_HEIGHT],
      outputRange: [0, 1],
      extrapolate: 'clamp'
    });
    const heroTitleOpacity = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_EXPANDED_HEIGHT-HEADER_COLLAPSED_HEIGHT],
      outputRange: [1, 0],
      extrapolate: 'clamp'
    });

    const headerTitle = 'Tokyo'

    return (
      <View style={styles.container}>
        <Animated.View style={[styles.header, { height: headerHeight }]}>
          <Animated.Text style={{fontWeight: '700',textAlign: 'left', fontSize: 22, color: 'white', opacity: headerTitleOpacity}}>{headerTitle}</Animated.Text>
          <Animated.Image
            style={[styles.image, {opacity: heroTitleOpacity}]}
                     source={require('../img/tokyo.jpg')}                     
                     />
        </Animated.View>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          onScroll={Animated.event(
            [{ nativeEvent: {
                contentOffset: {
                  y: this.state.scrollY
                }
              }
            }])
          }
          scrollEventThrottle={16}>
          <Location_price />
          <Tiket/>
          <Detail_contain/>

          
    
        </ScrollView>
        <View style={styles.bottomContainer}>
        <Button block
          backgroundColor={colors.surface}
          style={styles.buttonWrapper}>
          <Text style={{fontSize:14, color:colors.primary, fontWeight:'500'}}>ADD TO CART</Text>
        </Button>
        <Button block 
          backgroundColor={colors.primary}
          style={styles.buttonWrapper}>
          <Text style={{fontSize:14, color:colors.onPrimary, fontWeight:'500'}}>BOOK</Text>
        </Button>
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
  scrollContainer: {
    paddingTop: HEADER_EXPANDED_HEIGHT,
    paddingBottom: 78,
  },
  header: {
    backgroundColor: colors.primary,
    position: 'absolute',
    width: SCREEN_WIDTH,
    top: 0,
    left: 0,
    zIndex: 9999
  },
  image:{
    flex: 1,
    width: undefined,
    height: undefined,
  },
  bottomContainer: {
    width: '100%',
    height: 78,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: { width: 2, height: 0 },
    shadowRadius: 9,
    backgroundColor: colors.surface,
    position:'absolute',
    bottom:0,
    elevation:3,
    padding:20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    
  },
  buttonWrapper:{
    width: '48%',
    height: 38,
  },


});