import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'
import Colors from "../../Utils/Colors"

export default function Header() {

    const { user, isLoading } = useUser();

    return user && (
        <View style={styles.container}>
           <View style={styles.profContainer}>
           <View>
                <Image style={styles.userImage} source={{ uri: user?.imageUrl }} />
            </View>

            <View  >
                <Text style={{color:Colors.WHITE,fontSize:20}}> Hy  </Text>
                <Text style={{color:Colors.WHITE, fontWeight:'bold', fontSize:20}}> {user?.fullName},</Text>
                <Text style={{color:Colors.WHITE,fontSize:20}}> Welcome to Home service</Text>
            </View>
           </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding: 20,
        paddingTop: 30,
        backgroundColor:Colors.PRIMARY,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius:30,
        
    },

    profContainer:{
        display:'flex',
        flexDirection:'row'
    },
    
    userImage: {
        width: 45,
        height: 45,
        borderRadius: 100,
    }
})