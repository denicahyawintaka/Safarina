import React, {Component} from 'react';
import { Container, Header, Title, Content, Button, Icon, Left, Right, Body, Text } from "native-base";
import colors from "../../styles/colors";

export default class HeaderNoLeft extends Component {
  render() {
    const {title} = this.props;
    return (
        
        <Header noLeft
        style={{backgroundColor:colors.primary}}
        androidStatusBarColor={colors.primary}>
          <Left>
            <Button transparent>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title style={{fontSize:20, fontWeight:'bold',marginLeft:20}}>{title}</Title>
          </Body>
          <Right>
          <Button transparent>
              <Icon name="search" 
    
              />
            </Button>
          </Right>
        </Header>
    );
  }
}