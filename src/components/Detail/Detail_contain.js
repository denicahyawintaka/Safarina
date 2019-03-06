import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import colors from '../../styles/colors/index';

export default class Detail_contain extends Component {
    render() {

        return (
        <View style={styles.Container}>
            
            <View style={styles.detail}>
            <Text style={[styles.headingTentang,{marginBottom:6}]}>Tentang Kuil Tokyo</Text>
            <Text style={[styles.textTentang, {marginBottom:5}]}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque hendrerit est et urna pharetra lobortis. Nunc felis sem, euismod quis laoreet ac, fringilla sit amet velit. Fusce ut sodales neque, in scelerisque arcu. Aliquam malesuada ipsum arcu, sit amet vulputate urna vehicula id. Maecenas nec ligula tincidunt tellus mattis tincidunt.
            </Text>
            <View style={styles.video}></View>    
            </View>

          
        </View>
  );
}
}

const styles = StyleSheet.create({
Container:{
  backgroundColor: colors.surface,
  height:undefined,
  width: '100%',
  flexDirection: 'row', 
  justifyContent: 'space-between',
  padding:20,
},
detail:{
  marginLeft:30,
},
headingTentang:{
  lineHeight:24,
  fontSize:16,
  color:colors.onSurface,
  fontWeight:'500'
},
textTentang:{
  lineHeight:21,
  fontSize:14,
  color:colors.onSurface,
  fontWeight:'normal'
},
video:{
  width:undefined,
  height:193,
  backgroundColor:colors.background,
}



});