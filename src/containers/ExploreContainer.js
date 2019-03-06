import React, {Component} from 'react';
import{
    View,
    Text,
    StyleSheet,
    ScrollView,
}from 'react-native';
import colors from '../styles/colors';
import AktivitasRekreasi from '../components/Explore/AktivitasRekreasi';
import popularList from '../data/populars';
import Icon from 'react-native-vector-icons/Ionicons';
import Kunjungi from '../components/Explore/Kunjungi';
import HeaderNoLeft from '../components/Header/HeaderNoLeft';



export default class AkunContainer extends Component{
    static navigationOptions={
        tabBarLabel: 'Explore',
        tabBarIcon: ({ tintColor }) => (
            <Icon
             name="md-search"
             size={22}
             color={tintColor}
             />
     
        ),
    };
    render(){
        return(
            <View style={styles.wrapper}>
            <HeaderNoLeft
                title="Explore"
            />

            <ScrollView style={styles.scrollViewWrapper}>
                <Text style={styles.titleText}>Aktivitas dan Rekreasi Pilihan</Text>
                <AktivitasRekreasi
                populars={ popularList } />

                <Text style={styles.titleText}>Kota-kota yang harus kamu kunjungi</Text>
                <Kunjungi/>
           
        

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
    },
    titleText:{
        fontSize:14,
        lineHeight:20,
        fontWeight:'500',
        color:colors.onBackground,
        marginBottom: 10,
        marginLeft:20,
    },


});