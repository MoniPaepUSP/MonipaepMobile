import React from 'react'
import { Text, View, StyleSheet, Dimensions } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'; 
import {SafeAreaView} from './SafeAreaView';
import colors from '../styles/colors';
import fonts from '../styles/fonts';


export function Header(){
    return(
        <View>
            <View style={styles.header}>
                    <MaterialIcons style={styles.incons} name="chevron-left" size={30} color="white" />
                    <View style={styles.textScreenName}>
                        <Text style={styles.textScreenName}>"Screen Name"</Text>
                    </View>
                
                </View>
            <View style={styles.container}>
                
                <MaterialIcons style={styles.incons} name="menu" size={24} color="black" />
                <View style={styles.textContainer}>
                    <Text style={styles.textNameApp}>
                        MoniPaEp
                    </Text>
                </View>
            </View>
        </View>
            
        
        
            
    )
}

const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: Dimensions.get('window').height * 0.15,
      justifyContent: 'center',
    },
    header:{
        width: '100%',
        height: Dimensions.get('window').height * 0.05,
        backgroundColor: colors.blue,
        flexDirection: 'row'   
    },
    incons: {
        paddingLeft: 5
    },
    textScreenName: {
        fontFamily: fonts.generic,
        fontSize: 20,
        paddingLeft: 15,
        color: colors.white,
        justifyContent: 'space-around'
    },
    textNameApp:{
        fontSize: 32,
        color: colors.blue,
        fontFamily: fonts.appName,
    },
    textContainer:{
        alignItems: 'center'
    }
  });