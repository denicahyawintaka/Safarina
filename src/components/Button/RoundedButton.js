import React, { Component } from 'react';
import PropTypes from 'prop-types';

import{
    Text,
    View,
    TouchableHighlight,
    StyleSheet,
    
} from 'react-native';
import colors from '../../styles/colors'

export default class RoundedButton extends Component {
    render() {
        const { text, color, backgroundColor,  borderColor } = this.props; 
        return (
        <TouchableHighlight style={[{borderColor},{backgroundColor},styles.wrapper]}>
            <Text style={[{color},styles.buttonText]}>{text}</Text>
        </TouchableHighlight>

        );
    }
}
RoundedButton.PropTypes ={
    text: PropTypes.string.isRequired,
    color: PropTypes.string,
    backgroundColor: PropTypes.string,
    borderColor:  PropTypes.string,
};

const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        padding: 15,
        borderRadius: 3,
        borderWidth: 1,
        marginBottom: 15,

    },
    buttonText: {
        fontSize: 16,
        width: '100%',
        textAlign:'center',

      },
});