import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigationTypes";
import { Text, View } from "react-native";
 
type ProfileProps = NativeStackScreenProps<RootStackParamList, 'Profile'>;
 
export function ProfileScreen({ route }: ProfileProps) {
  return (
    <View>
      <Text>Nome: {route.params.name}</Text>
    </View>
  );
}