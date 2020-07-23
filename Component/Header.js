import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet,View,Text} from 'react-native';

function Header(){
    return(
        <View style={styles.Header}>
            <Text style={styles.title}>
                Todo List
            </Text>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        Header : {
            height : 80,
            paddingTop : 38,
            backgroundColor : 'coral',
        },
        title : {
            textAlign : 'center',
            color : '#fff',
            fontSize : 30,
            fontWeight : 'bold'
        }
    }
)
export default Header