import React from "react";
import { View, TextInput, Dimensions } from "react-native";
import { SvgXml } from 'react-native-svg'
import { SearchIcon } from "../../src/assets/icons";
import { SearchBg, white } from "../CustomStyles/Colors";
import styles from "../CustomStyles/Styles";

const SearchTextInput = ({ value, placeholder, onChangeText }) => {
    return (
        <View style={{flex: 1, paddingHorizontal: 10, justifyContent: 'flex-start', alignItems: 'center', backgroundColor: '#F0F0F0', borderRadius: 12, flexDirection: 'row'}}>
            <SvgXml 
                style={{paddingHorizontal: 16}}
                xml={SearchIcon}
                width={20}
                height={20} 
            />
            <TextInput 
                style={{color: SearchBg}}
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
            />
        </View>
    )
}

export default SearchTextInput