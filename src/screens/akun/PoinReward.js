import React, {Component} from 'react';
import {
 StyleSheet,View, Text   
} from 'react-native';

import Voucher from '../../components/Akun/Voucher';
import colors from '../../styles/colors';

export default class PoinReward extends Component{
    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.heading}>Gunakan Point</Text>
                <Voucher
                diskon="500 point"
                tujuan="Diskon 50% Kuil Tokyo"
                berlaku="Berlaku hingga 24 Maret 2019"
                />
                <Voucher
                diskon="500 point"
                tujuan="Diskon 50% Kuil Tokyo"
                berlaku="Berlaku hingga 24 Maret 2019"
                />
                <Voucher
                diskon="500 point"
                tujuan="Diskon 50% Kuil Tokyo"
                berlaku="Berlaku hingga 24 Maret 2019"
                />
            </View>
            
        
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      paddingTop:135,
      paddingLeft: 16,
      paddingRight: 16,
  
    },
    heading:{
        fontSize:16,
        lineHeight:24,
        fontWeight: '500',
    }

});

