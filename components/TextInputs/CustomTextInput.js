import React from "react";
import { View, TextInput } from 'react-native'
import styles from "../CustomStyles/Styles";

const CustomTextInput = ({ value, onChangeText, placeholder }) => {
    return (
        <View style={styles.text_input_style}>
            <TextInput
                style={styles.text_input_t_style}
                value={value}
                placeholder={placeholder}
                onChangeText={onChangeText}
            />
        </View>
    )
}

export default CustomTextInput