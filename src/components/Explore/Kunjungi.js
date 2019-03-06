import React, {Component} from 'react';
import{
    View,
    Text,
    StyleSheet,
}from 'react-native';
import colors from '../../styles/colors/index';
import { Col, Row, Grid } from 'react-native-easy-grid';

export default class AkunContainer extends Component{
    render(){
        return(           
          <Grid style={{backgroundColor:colors.surface,marginBottom:20}}>
            <Col style={{ height: undefined, width:undefined,marginTop:10, marginBottom:10}}>
                <Row style={{ alignItems:'center' ,flexDirection:'column',marginBottom:6}}>
                    <View style={{height:88, width:91, backgroundColor:'#F5F7FA'}}></View>
                    <Text style={{fontSize:12, lineHeight:16, fontWeight:'500',color:colors.onBackground}}>Bali</Text>
                </Row>
                <Row style={{ alignItems:'center' ,flexDirection:'column' }}>
                    <View style={{height:88, width:91, backgroundColor:'#F5F7FA'}}></View>
                    <Text style={{fontSize:12, lineHeight:16, fontWeight:'500',color:colors.onBackground}}>Hongkong</Text>
                </Row>
            </Col>

            <Col style={{ height: undefined, width:undefined,marginTop:10, marginBottom:10 }}>
                <Row style={{ alignItems:'center' ,flexDirection:'column'}}>
                    <View style={{height:88, width:91, backgroundColor:'#F5F7FA',marginBottom:6 }}></View>
                    <Text style={{fontSize:12, lineHeight:16, fontWeight:'500',color:colors.onBackground}}>Tokyo</Text>
                </Row>
                <Row style={{ alignItems:'center' ,flexDirection:'column'}}>
                    <View style={{height:88, width:91, backgroundColor:'#F5F7FA'}}></View>
                    <Text style={{fontSize:12, lineHeight:16, fontWeight:'500',color:colors.onBackground}}>Seol</Text>
                </Row>
           
            </Col>

            <Col style={{ height: undefined, width:undefined,marginTop:10, marginBottom:10 }}>
                <Row style={{ alignItems:'center' ,flexDirection:'column',marginBottom:6 }}>
                    <View style={{height:88, width:91, backgroundColor:'#F5F7FA'}}></View>
                    <Text style={{fontSize:12, lineHeight:16, fontWeight:'500',color:colors.onBackground}}>Sydney</Text>
                </Row>
                <Row style={{ alignItems:'center' ,flexDirection:'column'}}>
                    <View style={{height:88, width:91, backgroundColor:'#F5F7FA'}}></View>
                    <Text style={{fontSize:12, lineHeight:16, fontWeight:'500',color:colors.onBackground}}>Melbourne</Text>
                </Row>
           
            </Col>
          </Grid>
        );
    }
}

const styles = StyleSheet.create({
   


});