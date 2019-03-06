import React, { Component } from 'react';
import PropTypes from 'prop-types';

import{
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Animated,
    Easing,
    
} from 'react-native';
import colors from '../../styles/colors'

export default class InputField extends Component {
    render() {
        const { placeholder, textColor, borderBottomColor } = this.props; 
        const inputColor= textColor || colors.primary;
        return (
        <View style={styles.wrapper}>
            <TextInput
            autoCorrect={false}
            labelColor={colors.onBackground}
            textColor={colors.onBackground}
            style={[{color: inputColor}, styles.InputField]}/>
        </View>

        );
    }
}
InputField.PropTypes ={
    placeholder: PropTypes.string,
    textColor: PropTypes.string,
    borderBottomColor: PropTypes.string,
    
};

const styles = StyleSheet.create({
    wrapper: {
    display: 'flex',
},
    inputField: {
        paddingTop: 5,
        paddingBottom: 5,
},
});