import React from "react";
import { StyleSheet } from "react-native";
import { ButtonColor, placeHolderTextColor, secondaryTextColor, standardButtonBg, textInputBg, textInputBorderBg, white } from "./Colors";

const styles = StyleSheet.create({
    wrap_max_screen: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
    }, 
    wrap_max_size: {
        width: '100%',
        height: '100%',
        padding: 24,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center'
    },
    wrap_max_width: {
        width: '100%'
    },
    line_style: {
        width: '50%',
        borderWidth: 1,
        borderColor: textInputBorderBg
    },
    wrap_max_width_flex: {
        width: '80%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center'
    },
    set_image_style: {
        padding: 30,
    }, 
    button_style: {
        width: '90%',
        padding: 11,
        marginTop: 50,
        marginBottom: 20,
        borderRadius: 5,
        backgroundColor: ButtonColor
    },
    button_style_no_margin: {
        width: '100%',
        padding: 11,
        marginVertical: 20,
        borderRadius: 5,
        backgroundColor: ButtonColor
    },
    button_text_style: {
        width: '100%',
        textAlign: 'center',
        fontWeight: '500',
        fontSize: 12,
        color: white
    },
    text_style: {
        fontWeight: '600',
        fontSize: 14,
        alignItems: 'center',
        textAlign: 'center',
        alignContent: 'center'
    },
    text_style_with_padding: {
        fontSize: 14,
        fontWeight: '400',
        alignItems: 'center',
        alignContent: 'center',
        paddingTop: 24
    },
    text_input_style: {
        width: '100%',
        borderRadius: 5,
        borderWidth: 0.5,
        borderColor: textInputBorderBg,
        backgroundColor: textInputBg
    },
    text_input_t_style: {
        paddingHorizontal: 10,
        fontSize: 12,
        fontWeight: '400'
    },
    standard_button_style: {
        width: '80%',
        backgroundColor: standardButtonBg,
        padding: 16,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    standard_button_placeholder_t_style: {
        fontWeight: '400',
        color: placeHolderTextColor,
        fontSize: 12,
    },
    standard_button_t_style: {
        fontWeight: '500',
        color: secondaryTextColor,
        fontSize: 12,
        alignItems: 'center',
        alignContent: 'center'
    }
})

export default styles