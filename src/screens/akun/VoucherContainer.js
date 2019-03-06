import React, {Component} from 'react';
import {
 StyleSheet,View   
} from 'react-native';

import Voucher from '../../components/Akun/Voucher';
import colors from '../../styles/colors';

export default class VoucherContainer extends Component{
    render(){
        return (
            <View style={styles.container}>
                <Voucher
                diskon="Diskon 50%"
                tujuan="Kuil Tokyo"
                berlaku="Berlaku hingga 24 Maret 2019"
                />
                <Voucher
                diskon="Diskon 50%"
                tujuan="Kuil Tokyo"
                berlaku="Berlaku hingga 24 Maret 2019"
                />
                <Voucher
                diskon="Diskon 50%"
                tujuan="Kuil Tokyo"
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
      padding:16,
  
    },

});

