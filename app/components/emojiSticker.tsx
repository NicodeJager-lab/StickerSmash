import { ImageSourcePropType, View } from "react-native";
import Animated from "react-native-reanimated";

type Props = {
    imageSize: number;
    stickerSource: ImageSourcePropType;
}

export default function EmojiSticker({imageSize, stickerSource}: Props) {
    return (
        <View style={{top: -350}}>
            <Animated.Image resizeMode={"contain"} source={stickerSource} style={{width: imageSize, height: imageSize}} />
        </View>
    )
}