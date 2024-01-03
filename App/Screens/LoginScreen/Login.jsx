import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../Utils/Colors'
import * as WebBrowser from "expo-web-browser";
import { useWarmUpBrowser } from "../../hooks/warmUpBrowser";
import { useOAuth } from "@clerk/clerk-expo";



WebBrowser.maybeCompleteAuthSession(); 

export default function Login() {
    useWarmUpBrowser();
    const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
    const onPress = React.useCallback(async () => {
        try {
          const { createdSessionId, signIn, signUp, setActive } =
            await startOAuthFlow();
     
          if (createdSessionId) {
            setActive({ session: createdSessionId });
          } else {
            // Use signIn or signUp for next steps such as MFA
          }
        } catch (err) {
          console.error("OAuth error", err);
        }
      }, []);
    return (
        <View style={styles.home}>
            <Image style={styles.loginImage} source={require('./../../../assets/images/login.webp')} />

            <View style={styles.subContainer}>
                <Text style={{ fontSize: 30, color: Colors.WHITE, textAlign: 'center' }}>
                    Let's Connect you with
                    <Text style={{ fontWeight: 'bold' }}>  Skilled Professionals
                    </Text>
                </Text>
                <Text style={{ fontSize: 18, color: Colors.WHITE, textAlign: 'center', marginTop: 20, }}> With our app, finding trusted Service Providers is just a tap away.
                    </Text>

                <TouchableOpacity onPress={onPress}>
                    <Text style={styles.button}> Let's Get Started</Text>
                </TouchableOpacity>
            </View>
        </View>


    )
}

const styles = StyleSheet.create({
    home: {
        alignItems: 'center'
    },

    loginImage: {
        width: 400,
        height: 450
    },
    subContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: Colors.PRIMARY,
        marginTop: -20,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 20,
    },

    button:{
        backgroundColor: "#FFD700",
        fontSize: 18,
        color: "#333333",
        textAlign: 'center',
        borderRadius: 99,
        width: "70%",
        marginLeft:"auto",
        marginRight:"auto",
        padding: 20,
        marginTop: 30,
        
    }
})