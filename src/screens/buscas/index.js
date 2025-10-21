import {View, Text, Image} from 'react-native'
import { useRoute } from '@react-navigation/native'
import { useEffect, useState } from 'react';

export default function Search(){
     const route = useRoute ()
     const [pesquisarFilmes, setPesquisaFilmes] = useState ([]);

     useEffect(()=>{
        async function buscarfilmes(){
            const url = `https://api.themoviedb.org/3/search/movie?query=${route.params.busca}&include_adult=false&language=pt-Br&page=1`;
            const options = {
             method: 'GET',
             headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYWZhYTUzYjQyMzE1ZGU1NjViZTA2ODM2YzFkNTA5ZCIsIm5iZiI6MTc2MTA2NDE4MS45NDIwMDAyLCJzdWIiOiI2OGY3YjRmNTFlY2E5ZTkyOTI4N2Q1NTQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.vX2Gb4-CGM1rOiYjbgUP9GNy7oMUSMk1-hfMl91KRYU'
             }
            };


            const response = await fetch (url, options)
            const data = await response.json();
            console.log(data.results)
        }

        buscarfilmes()
        },[])
        







    return(
      
        <View>
            <Text> {route.params.busca} </Text>

             <Image style={styles.images} source={{ uri: `https://api.themoviedb.org/3/search/movie?query=${route.params.img}&include_adult=false&language=pt-Br&page=1` }}/>

             
        
        </View>

    )

}
