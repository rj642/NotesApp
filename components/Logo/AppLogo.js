import React from "react";
import { Image } from 'react-native'
import styles from "../CustomStyles/Styles";

const Logo = ({design = styles.set_image_style}) => {
    return (
        <Image style={design} source={require('../../src/assets/logos_instagram.png')} />
    )
}

export default Logo 