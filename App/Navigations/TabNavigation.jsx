import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import HomeScreen from "../Screens/HomeScreen/HomeScreen"
import BookingScreen from '../Screens/BookingScreen/BookingScreen';
import ProfileScreen from '../Screens/ProfileScreen/ProfileScreen'
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '../Utils/Colors';



const Tab = createBottomTabNavigator();

export default function TabNavigation() {
    return (
        <Tab.Navigator  screenOptions={{
            headerShown: false,
            tabBarInactiveTintColor:Colors.PRIMARY
        }}>
            <Tab.Screen name='home' component={HomeScreen}
                options={{
                    tabBarLabel: ({ color }) => (
                        <Text style={{ color: color, fontSize: 14, marginTop: -5 }}> Home </Text>
                    ),

                    tabBarIcon:({color, size})=>(
                        <Feather name="home" size={size} color={color} />
                    )
                }} />
            <Tab.Screen name='booking' component={BookingScreen} 
            options={{
                tabBarLabel: ({ color }) => (
                    <Text style={{ color: color, fontSize: 14, marginTop: -5 }}> Bookings </Text>
                ),

                tabBarIcon:({color, size})=>(
                    <MaterialCommunityIcons name="notebook-check" size={size} color={color} />
                )
            }} />
            <Tab.Screen name='profile' component={ProfileScreen} 
            options={{
                tabBarLabel: ({ color }) => (
                    <Text style={{ color: color, fontSize: 14, marginTop: -5 }}> Profile </Text>
                ),

                tabBarIcon:({color, size})=>(
                    <MaterialCommunityIcons name="account-circle" size={size} color={color} />
                )
            }} />

        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({})