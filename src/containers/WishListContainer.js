import React, {Component} from 'react';
import{
    View,
    StyleSheet,
    ScrollView,
    TouchableHighlight,
    Image
}from 'react-native';
import colors from '../styles/colors';

import Icon from 'react-native-vector-icons/Ionicons';
import { Button,  Text } from 'native-base';
import HeaderNoLeft from '../components/Header/HeaderNoLeft';



export default class AkunContainer extends Component{
    static navigationOptions={
        tabBarLabel: 'Explore',
        tabBarIcon: ({ tintColor }) => (
            <Icon
             name="?"
             size={22}
             color={tintColor}
             />
     
        ),
    };
    render(){
        return(
            <View style={styles.wrapper}>
            <HeaderNoLeft
                title="Wish List"
            />

            <ScrollView style={styles.scrollViewWrapper}>
                <Text style={styles.titleText}>Menampilkan 1 Wish List</Text>
                <TouchableHighlight >
                <View
                style={styles.card}>
                    <Image
                    style={styles.image}
                    source={require('../img/tokyo.jpg')}                     
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

                        <View style={{ justifyContent: 'space-between'}}>
                            <Button block
                                backgroundColor={colors.surface}
                                style={styles.buttonWrapper}>
                                <Text style={{fontSize:14, color:colors.primary, fontWeight:'500'}}>ADD TO CART</Text>
                            </Button>

                            <Button block 
                                backgroundColor={colors.primary}
                                style={styles.buttonWrapper}>
                                <Text style={{fontSize:14, color:colors.onPrimary, fontWeight:'500'}}>BOOK</Text>
                            </Button>
                  
                        </View>
                       
                    </View>
                </View>
            </TouchableHighlight>
           
        

            </ScrollView>
    
          
        </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
      flex: 1,
      backgroundColor: colors.background,
    },
    scrollViewWrapper:{
        paddingTop: 15,
        padding:20,
    },
    titleText:{
        fontSize:14,
        lineHeight:20,
        fontWeight:'500',
        color:colors.onBackground2,
        marginBottom: 10,
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
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