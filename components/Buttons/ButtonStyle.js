import React from "react";
import { View, Pressable, Text } from "react-native";
import styles from "../CustomStyles/Styles";

const CustomButton = ({ text, onPress, btnStyle }) => {
    return(
        <Pressable style={btnStyle} onPress={onPress} >
            <Text style={styles.button_text_style}>{text}</Text>
        </Pressable>
    )
}

export default CustomButton