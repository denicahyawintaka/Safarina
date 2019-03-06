import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import colors from '../../styles/colors/index';

export default class Location_price extends Component {
    render() {

        return (
        <View style={styles.Container}>
            
            <View >
              <View style={{marginBottom:12}}>
               <Text style={styles.textName}>Kuil Tokyo</Text>
               <Text style={styles.textLocation}>Tokyo, Japan</Text>
              </View>
              <View>
               <Text style={styles.textDiscount}>Rp. 180.000</Text>
               <Text style={styles.textPrice}>Rp 160.000</Text>
              </View>
        
            </View>
            <View>
             <View style={styles.miniBox}>
              <Text style={styles.textRating}>4.8</Text>
             </View>
              
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
  marginBottom:3, 
   flexDirection: 'row', 
   justifyContent: 'space-between',
    padding:20,
},
textName:{
  lineHeight:25,
  fontSize:16,
  color:colors.onSurface,
},
textLocation:{
  lineHeight:21,
  fontSize:14,
  color:colors.onSurface,
},
textPrice:{
  lineHeight:24 ,
  fontSize:16,
  color:colors.primary,
  fontWeight:'500',
},
textDiscount:{
  lineHeight:16,
  textDecorationLine: 'line-through',
  fontSize:12,
  color:colors.onBackground2,
  fontWeight:'500',
},
miniBox:{
  width:undefined,
  height:undefined,
  borderRadius: 1,
  backgroundColor:colors.surface,
  padding:7,
  elevation:0.5,
},
textRating:{
  fontSize:12,
  lineHeight:16,
  color:colors.onSurface,
}

});