import React from "react";
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AllNotes from "../screens/AllNotes";
import WriteNotes from "../screens/WriteNotes";
import { createRealmContext } from '@realm/react';
import NotesModel from "../models/NotesModel";

const Tab = createNativeStackNavigator()

export const realmConfig = {
    schema: [NotesModel]
}

export const { RealmProvider, useRealm, useObject, useQuery } = createRealmContext(realmConfig)

const Navigator = () => {
    return (
        <RealmProvider>
            <NavigationContainer>
                <Tab.Navigator initialRouteName="AllNotes" screenOptions={{ headerShown: false }}>
                    <Tab.Screen name="AllNotes" component={AllNotes} />
                    <Tab.Screen name="WriteNotes" component={WriteNotes} />
                </Tab.Navigator>
            </NavigationContainer>
        </RealmProvider>
    )
}

export default Navigator