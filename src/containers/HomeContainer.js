import React, {Component} from 'react';
import{
    View,
    ImageBackground,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
}from 'react-native';



import colors from '../styles/colors';
import { Button, Text } from 'native-base';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Populars from '../components/home/Populars';
import popularList from '../data/populars';
import Rekomendasi from '../components/home/Rekomendasi';

console.disableYellowBox = true;

export default class AkunContainer extends Component{
  
    static navigationOptions={
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) => (
            <MaterialIcon
             name="home"
             size={22}
             color={tintColor}
             />
        ),
    } ;
   
    render(){

        return(
            <View style={styles.wrapper}>
                <ScrollView>
                    <View style={styles.headerWrapper}>
                        <ImageBackground
                        style={styles.image}
                        source={require('../img/header.png')}                     
                        >
                            <Text style={styles.headerText}>Promo 50% OFF</Text>
                            <Button rounded
                             onPress={() => {
                                alert('You tapped the Button!');
                            }}
                                style={styles.button}
                            >
                                <Text >Discover Destination</Text>
                            </Button>
                        </ImageBackground>  
                    </View>

                    <View  style={styles.headingWrapper}>
                     <Text style={styles.heading}>Destinasi Terpopuler</Text>
                     <TouchableOpacity
                      onPress={() => {
                            alert('You tapped the Button!');
                        }}
                      style={styles.more}>
                        <Text style={styles.more}>More</Text>
                     </TouchableOpacity>
                    </View>
                    
                    <Populars
                     populars={ popularList } />

                    <View  style={styles.headingWrapper}>
                     <Text style={styles.heading}>Rekomendasi Kami</Text>
                     <TouchableOpacity
                      onPress={() => {
                            alert('You tapped the Button!');
                        }}
                      style={styles.more}>
                        <Text style={styles.more}>More</Text>
                     </TouchableOpacity>
                    </View>

                    <Rekomendasi populars={ popularList } />

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
    headerWrapper: {
        width:'100%',
        marginBottom: 20,
    },
    headerText:{
        fontSize:16,
        lineHeight:24,
        fontWeight:'500',
        color:colors.onBackground,
        marginBottom:11
    },
    image:{
        height:224,
        width:undefined,
        justifyContent:'center',
        alignItems:'center',
    },
    button:{
        alignSelf:"center",
        backgroundColor:colors.primary
    },
    headingWrapper:{
        display: 'flex',
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: 9,
        paddingLeft: 20,
        paddingRight: 20,
    },
    heading: {
        fontSize: 16,
        fontWeight: '500',
        color:colors.onBackground,
    },
    moreWrapper:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    more:{
        fontSize: 16,
        fontWeight: '500',
        color:colors.primary,
    }


});