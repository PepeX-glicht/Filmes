import {View, Text} from 'react-native'
import { useRoute } from '@react-navigation/native'

export default function Search(){
     const route = useRoute ();
    return(
      
        <View>
            <Text> {route.params.busca} </Text>
        </View>

    )

}
