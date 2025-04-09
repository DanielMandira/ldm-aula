import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useState } from "react";
import { Text, View } from "react-native";

type Props = NativeStackScreenProps<RootStackParamList,'Home'>

export function HomeScreen({navigation}:Props){
    const [name, setName] = useState('');
    return(
        <View>
            <Text>Home Screen</Text>
        </View>
    )
}