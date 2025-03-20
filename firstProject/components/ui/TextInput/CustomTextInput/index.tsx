import { TextStyle, ViewStyle } from "react-native/Libraries/StyleSheet/StyleSheetTypes";
import styles from "./styles"
import { TextInput } from "react-native";
import { View } from "@/components/Themed";

type CustomTextInputProps={
    hint?:string;
    defaultValue?:string;
    containerStyle?:ViewStyle
    inputStyle?:TextStyle;
};

export default function CustomTextInput({
    hint,
    defaultValue,
    containerStyle,
    inputStyle,
    ...props
}:CustomTextInputProps){
return(
    <View>
        <TextInput
        style={[styles.input, inputStyle]}
        placeholder={hint}
        defaultValue={defaultValue}
        placeholderTextColor="#888"
        {...props}
        />
    </View>
);
}

