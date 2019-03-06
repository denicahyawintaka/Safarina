import React, { Component } from 'react';
import{
  TextInput, 
  Animated,
  View,
    
} from 'react-native';
import colors from '../../styles/colors'



export default class FloatingInput extends Component {
    state = {
        isFocused: false,
      };
    
    componentWillMount() {
        this._animatedIsFocused = new Animated.Value(this.props.value === '' ? 0 : 1);
    }
      
    componentDidUpdate() {
      Animated.timing(this._animatedIsFocused, {
        toValue: (this.state.isFocused || this.props.value !== '') ? 1 : 0,
          duration: 200,
        }).start();
      }

      handleFocus = () => this.setState({ isFocused: true });
      handleBlur = () => this.setState({ isFocused: false });

      render() {
        const { label, marginBottom, ...props} = this.props;
        
        const labelStyle = {
          position: 'absolute',
          left: 0,
          top: this._animatedIsFocused.interpolate({
            inputRange: [0, 1],
            outputRange: [30, 0],
          }),
          fontSize: this._animatedIsFocused.interpolate({
            inputRange: [0, 1],
            outputRange: [16, 14],
          }),
          color: this._animatedIsFocused.interpolate({
            inputRange: [0, 1],
            outputRange: [colors.onBackground2, colors.onBackground],
          }),
        };
        return (
          <View style={{ paddingTop: 18 }}>
            <Animated.Text style={labelStyle}>
              {label}
            </Animated.Text>
            <TextInput
              {...props}
              style={{ paddingTop: 5, paddingBottom: 5, marginBottom,  fontSize: 16, color: colors.textcolor, borderBottomWidth: 1, borderBottomColor: colors.borderbottom }}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
              blurOnSubmit
            />
          </View>
        );
      }
    }

