import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import colors from '../../styles/colors/index';

export default class Tiket extends Component {
    render() {

        return (
        <View style={styles.Container}>
            
            <View >
              
            <Text style={[styles.textKeterangan, {marginBottom:5}]}>Tersedia dari 5 Februari 2019</Text>
            <Text style={[styles.textKeterangan, {marginBottom:5}]}>24 Jam Konfirmasi</Text>
            <Text style={[styles.textKeterangan, {marginBottom:5}]}>Tidak dapat dibatalkan</Text>
           
            </View>
            <View>
            <TouchableOpacity style={styles.more}>
             <Text style={styles.tiket}>LIHAT TIKET</Text>
            </TouchableOpacity>
        
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
textKeterangan:{
  lineHeight:21,
  fontSize:14,
  color:colors.onBackground2,
  fontWeight:'normal'
},


tiket:{
  fontWeight:'500',
  fontSize:12,
  lineHeight:16,
  color:colors.primary,
}

});