import React from 'react'
import { View, Text } from 'react-native'
import styles from './Styles'

const BorderLine = () => {
    return (
        <View style={styles.line_style} />
    )
}

const DividerWithOr = () => {
    return (
        <View style={styles.wrap_max_width_flex}>
            <BorderLine />
            <Text style={styles.text_input_t_style}>OR</Text>
            <BorderLine />
        </View>
    )
}

export default DividerWithOr