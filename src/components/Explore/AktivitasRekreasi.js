import React, { Component } from 'react';

import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../styles/colors';
import {
    View,
    StyleSheet,
    Image,
    TouchableHighlight,
    ScrollView,
} from 'react-native';
import { Button,  Text } from 'native-base';
export default class Populars extends Component{
    constructor(props){
        super(props);
    }

    get Populars() {
        const  { populars } = this.props;
     
        return populars.map((populars, index) => {
            return(
            <TouchableHighlight >
                <View
                style={styles.card}>
                    <Image
                    style={styles.image}
                    source={populars.image}                     
                    />
                    <View style={styles.cardContain}>
                        <Text style={styles.namaText}>
                         Kuil Tokyo
                        </Text> 
                        <Text style={styles.lokasiText}>
                         Tokyo, Jepang
                        </Text>
                        <View style={{marginTop:4, marginBottom:21}}>
                         <Text style={styles.textDiscount}>Rp. 180.000</Text>
                         <Text style={styles.textPrice}>Rp 160.000</Text>
                        </View>
                        <Button block
                            backgroundColor={colors.surface}
                            style={[styles.button, {marginBottom:6}]}>
                            <Text style={[styles.buttonText, {color:colors.primary}]}>ADD TO CART</Text>
                        </Button>

                        <Button block 
                            backgroundColor={colors.primary}
                            style={styles.button}>
                             <Text style={[styles.buttonText, {color:colors.onPrimary}]}>BOOK</Text>
                        </Button>
                    </View>
                </View>
            </TouchableHighlight>
            );
        });
    }
    render(){
        return(
            <ScrollView 
            style={styles.wrapper}
            contentContainerStyle={styles.wrapperContain}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            >
                {this.Populars}
            </ScrollView>
        );
    }
};

const styles = StyleSheet.create({
    wrapper: {
      flex: 1,
    },
    wrapperContain:{
        flexDirection: 'row',
        paddingLeft: 20,
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        width: 210,
        height: undefined,
        marginRight: 15,
        marginBottom:20,
        backgroundColor: colors.surface,
        borderRadius: 10,
        elevation:2
    },
    cardContain:{
        padding:13,

    },
    buttonText:{
        fontSize:14,
         fontWeight:'500',
    },
    button:{
        borderRadius:3,
        marginRight:16,
        marginLeft: 16,
    },
    image:{
        flex: 1,
        width: undefined,
        height: 144,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        marginBottom: 7,
    },
    namaText:{
        fontSize:14,
        lineHeight:21,
        fontWeight: 'normal',
        color: colors.onBackground,
    },
    lokasiText:{
        fontSize:12,
        lineHeight:18,
        fontWeight: 'normal',
        color: colors.onBackground,
    },
    textPrice:{
        lineHeight:20 ,
        fontSize:14,
        color:colors.primary,
        fontWeight:'500',
      },
      textDiscount:{
        lineHeight:16,
        textDecorationLine: 'line-through',
        fontSize:10,
        color:colors.onBackground2,
        fontWeight:'normal',
      },

});