import React, { useState, useEffect, useLayoutEffect } from "react";
import { View, Text, TextInput, ScrollView, StatusBar } from 'react-native'
import { useNavigationParam, useRoute } from '@react-navigation/native'
import { SvgXml } from 'react-native-svg'
import { black, white } from "../../components/CustomStyles/Colors";
import { AddTaskButton, BackButton, HeartButton, ShareButton } from "../assets/icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRealm } from "../routes/Navigator";

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

/*const _storeData = async(key, value) => {
    try {
        const jsonValue = JSON.stringify(value)
        res = await AsyncStorage.setItem(
            `${key}`,
            jsonValue
        )
        console.log(`value passed here is ${key, value}`)
    } catch (error) {
        console.log(error)
    }
}*/

const ViewAndEditScreen = ({ title, content }) => {

    const [newTitle, setNewTitle] = useState("")
    const [newContent, setNewContent] = useState("")
    const [putId, setPutId] = useState("")
    const realm = useRealm()

    const createNewNotesObject = () => {
        realm.write(() => {
            realm.create('Notes', {
                _id: putId != "" ? putId : setPutId(Realm.BSON.ObjectId()),
                title: newTitle,
                content: newContent,
                color: '#D9E8FC',
            },
            putId != "" ? 'modified': 'all')
        })
    }

    const handleStateAndKey = (setState) => (text) => {
        setState(text)
        createNewNotesObject()
    }

    useEffect(() => {
        setNewTitle(title)
        setNewContent(content)
    }, [])

    return (
        <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start' }}>
            <ScrollView>
                <TextInput
                    style={{ flex: 1, fontSize: 32, fontWeight: '700', color: black }}
                    value={newTitle}
                    multiline={true}
                    placeholder="Title "
                    onChangeText={handleStateAndKey(setNewTitle)}
                />
                <TextInput
                    style={{ flex: 1, fontSize: 16, fontWeight: '400', color: black }}
                    value={newContent}
                    placeholder={'Content'}
                    multiline={true}
                    onChangeText={handleStateAndKey(setNewContent)}
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