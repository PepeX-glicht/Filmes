import React,{Fragment} from 'react'
import {Image,Text} from 'react-native'
import styles from './style';


export default function BannerFilmes(){

    

    return(

        <>
 <Text style = {styles.textBanner}> Em cartaz  </Text>

 <Image style = {styles.imageBanner} source = {require(`../../img/1.jpeg`)}/>
        </>
    );

} 