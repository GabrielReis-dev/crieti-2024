import { useNavigation } from "@react-navigation/native";
import { useState } from "react"
import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from "react-native"

const navigation = useNavigation(); //Cria a viariável que permite a navegação

export const Contador = () => {

    const [count, setCount] = useState<number>(0);

    return (
        <SafeAreaView style={styles.container}>
            <Text>{count}</Text>
            <TouchableOpacity onPress={() => setCount(count + 1)}>
                <Text>INCREMENTAR</Text>
            </TouchableOpacity>
        
            <TouchableOpacity
               onPress={() => {
                navigation.navigate("Account");
               }}/>
 
            <Text>NAVEGAR PARA OUTRA TELA</Text>
        </TouchableOpacity>
    </SafeAreaView>
    

)

}

