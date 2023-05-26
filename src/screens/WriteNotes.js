import React, { useState, useEffect } from "react";
import { View, Text, TextInput, ScrollView, StatusBar } from 'react-native'
import { useNavigationParam, useRoute } from '@react-navigation/native'
import { SvgXml } from 'react-native-svg'
import { black, white } from "../../components/CustomStyles/Colors";
import { AddTaskButton, BackButton, HeartButton, ShareButton } from "../assets/icons";

const ActionBar = ({ navigation }) => {
    return (
        <View style={{ width: '100%', paddingBottom: 15, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <SvgXml
                xml={BackButton}
                width={24}
                height={24}
                onPress={() => navigation.goBack()}
            />
            <View style={{ flex: 0.35, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <SvgXml
                    xml={AddTaskButton}
                    width={24}
                    height={24}
                />
                <SvgXml
                    xml={HeartButton}
                    width={24}
                    height={24}
                />
                <SvgXml
                    xml={ShareButton}
                    width={24}
                    height={24}
                />
            </View>
        </View>
    )
}

const ViewAndEditScreen = ({ title, content }) => {

    const [newTitle, setNewTitle] = useState("")
    const [newContent, setNewContent] = useState("")

    useEffect(() => {
        setNewTitle(title),
            setNewContent(content)
    }, [])

    return (
        <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start' }}>
            <ScrollView>
                <TextInput
                    style={{ fontSize: 32, fontWeight: '700', color: black }}
                    value={newTitle}
                    placeholder={'Title'}
                    multiline={true}
                    onChangeText={setNewTitle}
                />
                <TextInput
                    style={{ fontSize: 16, fontWeight: '400', color: black }}
                    value={newContent}
                    placeholder={'Content'}
                    multiline={true}
                    onChangeText={setNewContent}
                />
            </ScrollView>
        </View>
    )

}

const WriteNotes = ({ navigation }) => {

    const route = useRoute()

    const { title, content } = route.params

    return (
        <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start', padding: 24 }}>
            <StatusBar backgroundColor={black} />
            <ActionBar navigation={navigation} />
            <ViewAndEditScreen title={title} content={content} />
        </View>
    )
}

export default WriteNotes