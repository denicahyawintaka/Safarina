import React, { Component } from 'react';
import{
    View,
    StyleSheet,
    TouchableHighlight

    
} from 'react-native';
import { Form, Button, Text } from 'native-base';
import colors from '../../styles/colors/index'


export default class Card extends Component {
    render() {
        const { diskon, tujuan, berlaku } = this.props;

        return (
        <TouchableHighlight>
            <View style={styles.Container}>

                <View >
                    <Text style={styles.diskonText}> {diskon} </Text>
                    <Text style={styles.tujuanText}> {tujuan} </Text>
                    <Text style={styles.berlakuText}> {berlaku} </Text>
                </View>

                <Button
                style={styles.button}
                >
                    <Text>Pakai</Text>
                </Button>
       
                
            </View>
        </TouchableHighlight>
  

        );
    }
}


const styles = StyleSheet.create({
    Container:{
        backgroundColor: colors.surface,
        height:undefined,
        width: '100%',
        padding: 20,
        marginBottom: 5,
        marginTop: 5,
    },
    button:{
        backgroundColor:colors.primary,
        position:'absolute',
        right:17,
        bottom:28,

    },
    textButton:{
        fontWeight:'500',
        fontSize:14,
    },
    diskonText:{
        fontSize:16,
        fontWeight: '500',
        lineHeight:24,
        color: colors.primary,
      },
    tujuanText:{
        fontSize:14,
        fontWeight: 'normal',
        lineHeight:21,
        color: colors.onBackground,
        marginBottom: 9,
      },
    berlakuText:{
        fontSize:12,
        fontWeight: 'normal',
        lineHeight:18,
        color: colors.onBackground2,
        marginBottom: 3,
    }

});