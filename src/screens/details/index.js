import {StyleSheet, View, Text, Image} from 'react-native'
import { useRoute } from '@react-navigation/native'
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Details(){
 const route = useRoute();
  return(
   <View style={stylest.body}>
   <Image style={stylest.images} source={{uri :`https:/image.tmdb.org/t/p/original${route.params.img}`}}/>
   <Text style = {stylest.titulo}> {route.params.titulo} </Text>
   <Text style = {stylest.textoNota}> {route.params.nota} </Text>
            
   <View style={{alignItems:'center'}}>
    <Stars
    default={route.params.nota}
    count={5}
    half={true}
    starSize={50}
    fullStar={<Icon name={'star'} style={[stylest.myStarStyle]}/>}
    emptyStar={<Icon name={'star-outline'} style={[stylest.myStarStyle, stylest.myEmptyStarStyle]}/>}
    halfStar={<Icon name={'star-half'} style={[stylest.myStarStyle]}/>}
    disable={true}/>
    </View>
    <Text style ={stylest.sinopse}> {route.params.sinopse} </Text>
    </View>     
    )
};

const stylest = StyleSheet.create({

titulo:{
    color: '#fffefeff',
    fontSize:30,
    textAlign:'center',
},

textoNota:{
    fontSize:20,
    color:'#ffffffff',
    textAlign:'center',
},

images:{
    width: 300,
    height: 400,
    borderRadius:25,
    margin:50,
},

sinopse:{
    fontSize:15,
    color:'white',
    textAlign:'center',
    padding:20,
},

myStarStyle: {
    color: 'yellow',
    backgroundColor: 'transparent',
    textShadowColor: 'black',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 2,
},

myEmptyStarStyle: {
    color: 'white',
},

body:{
    backgroundColor:'#141a29',
    flex:'1',
}

})