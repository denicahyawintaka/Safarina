import React, { Component } from 'react';
import PropTypes from 'prop-types';

import{
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import colors from '../../styles/colors'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';



export default class Card extends Component {
    render() {
        const { text, handleButtonPress } = this.props;
        
        return (
        <TouchableOpacity
         onPress={handleButtonPress}
        >
            <View style={styles.Container}>
                <Text style={styles.text}> {text} </Text> 
                <MaterialIcon 
                    name="keyboard-arrow-right"
                    size={22}
                    />
            </View>
           
        </TouchableOpacity>
  

        );
    }
}


const styles = StyleSheet.create({
    Container:{
        backgroundColor: colors.surface,
        height:undefined,
        width: '100%',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 14,
        paddingBottom: 14,
        borderRadius: 5,
        marginBottom: 10,
        justifyContent: 'space-between',
        flexDirection: 'row',
      },
 
    text:{
        fontSize:14,
        lineHeight:21,
        alignContent:'center',
        fontWeight: 'normal',
        color:colors.onSurface
    }
});
