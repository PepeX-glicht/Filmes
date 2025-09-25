import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native-web";
import styles from './style.js'
import { useNavigation } from "@react-navigation/native";

export default function CardMovies({titulo, img, nota, sinopse}){
  const navigation = useNavigation();
    return(
      <TouchableOpacity style={styles.containerFilmes} onPress= {() => navigation.navigate('Detalhes',{titulo, nota, img, sinopse})} >

      <Image style={styles.images} source={{uri :(`https:/image.tmdb.org/t/p/original${img}`)}}/>
      <Text style={styles.titulo}>{titulo}</Text>
      <Text style={styles.textoNota}>{nota}</Text>

      </TouchableOpacity>
  )
}