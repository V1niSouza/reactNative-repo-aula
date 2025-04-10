import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigationTypes";
import { useState } from "react";
import { Text, TextInput, View } from "react-native";
import { CustomButton } from "../components/CustomButton";

type Props = NativeStackScreenProps< RootStackParamList, 'Home'>

export function HomeScreen({navigation}:Props){
    const [name,setName] = useState('');

    return(
        <View style={{
            flex:1,
            alignItems:'center',
            justifyContent:'center'
        }}>
            <Text>Home Screen</Text>
            <TextInput
            placeholder="Digite seu nome"
            value={name}
            onChangeText={setName}
            style={{
                borderWidth:1,
                padding:10,
                margin:10,
                width:200
            }}
            />

            <CustomButton
            title="Ir para perfil"
            onPress={()=>
                navigation.navigate("Profile",{name})
            }
            />
        </View>
    );
}