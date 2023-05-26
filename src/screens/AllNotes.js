import React, { useState } from "react";
import { SvgUri, Svg, SvgXml } from "react-native-svg";
import styles from "../../components/CustomStyles/Styles";
import { View, Dimensions, Text, ScrollView, Pressable, FlatList } from 'react-native'
import SearchTextInput from "../../components/TextInputs/SearchTextInput";
import { BellIcon } from "../assets/icons";
import { black, white } from "../../components/CustomStyles/Colors";

const DateConstants = [
    {
        day: 'Tuesday',
        date: '24',
        month: 'April'
    },
    {
        day: 'Wednesday',
        date: '25',
        month: 'April'
    },
    {
        day: 'Thursday',
        date: '26',
        month: 'April'
    },
    {
        day: 'Friday',
        date: '27',
        month: 'April'
    },
    {
        day: 'Saturday',
        date: '28',
        month: 'April'
    },
    {
        day: 'Saturday',
        date: '28',
        month: 'April'
    },
    {
        day: 'Saturday',
        date: '28',
        month: 'April'
    },
    {
        day: 'Saturday',
        date: '28',
        month: 'April'
    },
    {
        day: 'Saturday',
        date: '28',
        month: 'April'
    },

]

const ListItem = [
    'All',
    'Important',
    'LinkedIn Docs',
    'Instagram Stories',
    'Facebook Content',
    'Story Written',
    'Script Data',
    'Random Data',
    'Just few thoughts of mine'
]

const NotepadList = [
    {
        id: 1,
        title: 'Product Meeting',
        content: 'Review of Previous Action Items Product Development Update User Feedback and Customer Insights Competitive Analysis Roadmap Discussion',
        color: '#D9E8FC'
    },
    {
        id: 2,
        title: 'To-Do List',
        content: 'Review of Previous Action Items Product Development Update User Feedback and Customer Insights Competitive Analysis Roadmap Discussion',
        color: '#FFD8F4'
    },
    {
        id: 3,
        title: 'Shopping List',
        content: 'Review of Previous Action Items Product Development Update User Feedback and Customer Insights Competitive Analysis Roadmap Discussion',
        color: '#FDE99D'
    },
    {
        id: 4,
        title: 'Importants',
        content: 'Review of Previous Action Items Product Development Update User Feedback and Customer Insights Competitive Analysis Roadmap Discussion',
        color: '#B0E9CA'
    },
    {
        id: 5,
        title: 'Notes',
        content: 'Review of Previous Action Items Product Development Update User Feedback and Customer Insights Competitive Analysis Roadmap Discussion',
        color: '#FFEADD'
    },
    {
        id: 6,
        title: 'Importants',
        content: 'This doesn\'t contains any of the text item but at the same time it does as well',
        color: '#B0E9CA'
    },
]

const NotepadCardView = ({ item, onPress }) => {

    return (
        <Pressable onPress={onPress} style={{flex: 1 / 2}}>
            <View style={{ paddingHorizontal: 16, paddingVertical: 14, borderRadius: 15, backgroundColor: item.color, marginBottom: 16, marginHorizontal: 8 }}>
                <Text style={{ fontWeight: '700', fontSize: 16, color: black }}>{item.title}</Text>
                <Text style={{ fontWeight: '500', fontSize: 12, color: black, marginTop: 10 }}>{item.content}</Text>
            </View>
        </Pressable>
    )

}

const CardView = ({ text }) => {

    const [selected, setSelected] = useState(false)

    return (
        <Pressable onPress={() => setSelected(!selected)}>
            <View style={{ paddingHorizontal: 16, paddingVertical: 6, borderRadius: 10, borderWidth: 1, borderColor: '#E2E2E2', backgroundColor: selected ? black : white }} >
                <Text style={{ fontSize: 12, fontWeight: '400', color: selected ? white : '#7C7C7C' }}>{text}</Text>
            </View>
        </Pressable>
    )
}

const CalendarTextItem = ({ text }) => {

    const [selected, setSelected] = useState(false)

    return (
        <Pressable onPress={() => setSelected(!selected)}>
            <View style={{ paddingHorizontal: 10, paddingVertical: 8, alignItems: 'center', borderRadius: 10, borderWidth: 1, borderColor: '#E6E6E6', justifyContent: 'space-between', backgroundColor: selected ? black : white }}>
                <Text style={{ fontSize: 12, fontWeight: '500', color: selected ? white : black }}>{text.day.slice(0, 3)}</Text>
                <Text style={{ fontSize: 24, fontWeight: '700', color: selected ? white : black }}>{text.date}</Text>
                <Text style={{ fontSize: 12, fontWeight: '500', color: selected ? white : black }}>{text.month.slice(0, 3)}</Text>
            </View>
        </Pressable>
    )
}

const AllNotes = ({ navigation }) => {

    const [searchText, setSearchText] = useState("")

    return (
        <View style={{ overflow: "scroll", }}>
            <View style={{ width: '100%', padding: 24, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', alignContent: 'center', flexWrap: "wrap" }}>
                <SearchTextInput value={searchText} placeholder={'Search for notes'} onChangeText={setSearchText} />
                <SvgXml
                    style={{ marginStart: 16 }}
                    xml={BellIcon}
                    width={24}
                    height={24}
                />
            </View>
            <View style={{ paddingBottom: 10 }}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} paddingHorizontal={24} >
                    {
                        DateConstants.map(item => {
                            return (
                                <View style={{ paddingEnd: 12, justifyContent: 'flex-start', alignSelf: 'flex-start' }}>
                                    <CalendarTextItem text={item} key={item.date} />
                                </View>
                            )
                        })
                    }
                </ScrollView>
            </View>
            <ScrollView >
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} paddingHorizontal={24} style={{ paddingVertical: 18 }}>
                    {
                        ListItem.map(item => {
                            return (
                                <View style={{ paddingEnd: 12, justifyContent: 'flex-start', alignSelf: 'center' }}>
                                    <CardView text={item} key={item} />
                                </View>
                            )
                        })
                    }
                </ScrollView>
                <FlatList
                    style={{ paddingHorizontal: 12 }}
                    data={NotepadList}
                    numColumns={2}
                    renderItem={({ item }) => <NotepadCardView item={item} onPress={() => navigation.navigate('WriteNotes', {title: item.title, content: item.content})} />}
                    keyExtractor={(item) => item.id}
                />
            </ScrollView>
        </View>
    )
}

export default AllNotes