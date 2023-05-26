import React from "react";
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AllNotes from "../screens/AllNotes";
import WriteNotes from "../screens/WriteNotes";

const Tab = createNativeStackNavigator()

const Navigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName="AllNotes" screenOptions={{ headerShown: false }}>
                <Tab.Screen name="AllNotes" component={AllNotes} />
                <Tab.Screen name="WriteNotes" component={WriteNotes} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Navigator