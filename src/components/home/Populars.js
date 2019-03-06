import React, { Component } from 'react';

import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../styles/colors';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    ScrollView,
} from 'react-native';

export default class Populars extends Component{
    constructor(props){
        super(props);
    }

    get Populars() {
        const  { populars } = this.props;
     
        return populars.map((populars, index) => {
            return(
             <TouchableOpacity 
               onPress={() => {
                    alert('You tapped the List!');
                }}
                style={styles.card}>
                 <View 
                   style={styles.cardContain}>
                     <Image
                     style={styles.image}
                     source={populars.image}                     
                     />
                     <Text style={styles.nama}>
                        {populars.nama}
                     </Text> 
                     <Text style={styles.rekreasi}>
                        {populars.rekreasi}
                     </Text> 
                 </View>
                

             </TouchableOpacity>
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
        width: 150,
        height: 200,
        marginRight: 15,
        marginBottom:12,
    },
    cardContain:{
        flex:1,
    },
    image:{
        flex: 1,
        width: undefined,
        height: undefined,
        borderRadius: 5,
        marginBottom: 7,
    },
    nama:{
        fontSize:16,
        width:150,
        fontWeight: '700',
        color: colors.onBackground,
    },
    rekreasi:{
        fontSize:14,
        fontWeight: '400',
        color: colors.onBackground,
    }

});