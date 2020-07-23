import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet,Text,View, FlatList} from 'react-native';

function ListMahasiswa(props){
    return(
         <Text>{props.dataItem.name}</Text>
    )
}

export default ListMahasiswa