import { TouchableOpacity, Text, StyleSheet } from "react-native";

type Props = {
    title: String;
    onPress:() => void;
}

export function CustomButton(
    {
        title,
        onPress
    }: Props
){
    return(
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.text}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create(
    {
        button:{
            backgroundColor: '#007AFF',
            padding: 12,
            borderRadius: 10,
            margin: 10,
            minWidth: 200,
            alignItems: 'center'
        },
        text:{
            color:'white',
            fontSize: 16,

        }
    }
)