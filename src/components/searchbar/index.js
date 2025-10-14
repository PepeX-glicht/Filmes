import React from "react";
import { TextInput, View, TouchableOpacity } from "react-native";
import Feather from '@expo/vector-icons/Feather';
import styles from './style'
import {useState} from "react";
import { useNavigation } from "@react-navigation/native";

export default function Search(){

    const [busca,setBusca] = useState ();

    const navigation = useNavigation();
    

    function buscaTeste (){

        console.log(busca);
    }

    return(
        <View style= {styles.containerSearch}>   
 
        <TextInput onChangeText={(texto) => {setBusca(texto)}} style= {styles.inputSearch} placeholder="Digite o filme que deseja buscar"></TextInput>
        <TouchableOpacity onPress={() => navigation.navigate('Buscas', {busca})}>
        <Feather name="search" size={20} color="black" style = {{marginRight:12}} />
        </TouchableOpacity>
           
        </View>

    )
}