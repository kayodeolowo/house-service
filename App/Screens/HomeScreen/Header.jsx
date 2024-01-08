import { View, Text, Image, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'
import Colors from "../../Utils/Colors"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Header() {

    const { user, isLoading } = useUser();

    return user && (
        <View style={styles.container}>
            <View style={styles.profContainer}>

                <Image style={styles.userImage} source={{ uri: user?.imageUrl }} />



                <View  >
                    <Text style={{ color: Colors.WHITE, fontSize: 20, fontWeight: 'bold' }}> Hy {user?.fullName} </Text>
                    <Text style={{ color: Colors.WHITE, fontSize: 20, fontFamily: "out-fit" }}> Welcome to Home service</Text>
                </View>

                <MaterialCommunityIcons name="notebook-check" size={30} style={{ color: Colors.WHITE, marginLeft: "auto" }} />

            </View>

            {/* search bar */}
            <View style={styles.searchContainer}>
                <TextInput placeholder='Search' style={styles.searchInput}/>
                <FontAwesome5 name="search" size={24} color={Colors.PRIMARY}  style={{backgroundColor:Colors.WHITE,  padding: 10, borderRadius: 10,}}   />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingTop: 30,
        backgroundColor: Colors.PRIMARY,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,

    },

    profContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: "center",
        alignContent: "space-between",

    },

    userImage: {
        width: 45,
        height: 45,
        borderRadius: 100,
    },

    searchInput:{
        padding: 10,
        paddingHorizontal: 16,
        backgroundColor: Colors.WHITE,
        borderRadius: 10,
        width:"80%",
        fontSize: 15

    },

    searchContainer:{
        marginTop: 15,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        width: "fit-content",
        marginHorizontal: "auto",
        marginBottom: 20,
    }


})