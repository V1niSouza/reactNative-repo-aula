import { Image, ImageStyle, ViewStyle, View} from "react-native";
import styles from "./styles";

type ImageComponentProps = {
    uri: string;
    color?: string;
    containerStyle?: ViewStyle;
    imageStyle?: ImageStyle;
};

export default function ImageComponent({
    uri,
    color = '#2f95dc',
    containerStyle,
    imageStyle
}: ImageComponentProps) {
    return (
        <View style={[styles.container, containerStyle,{borderColor:color}]}>
            <Image
                source={{uri}}
                style={[styles.image,imageStyle,{ tintColor: color }]}
            />
        </View>
    );
}