import React, { useState } from "react";
import { View, Text, StyleSheet, useWindowDimensions, ScrollView} from "react-native";
import CustomButton from "../../src/components/CustomButton/CustomButton";
import CustomInput from "../../src/components/CustomInput/CustomInput";
import SocialSignInButtons from "../../src/components/SocialSignInButtons/SocialSignInButtons";
import {useNavigation} from '@react-navigation/native'


export default function ConfirmEmailScreen (){
    const [code,setCode]=useState('')
    

    const {height}= useWindowDimensions();
    const navigation = useNavigation()

    const confirm = ()=>{
        navigation.navigate('Home')
    }
    const resend = ()=>{
        console.warn('resend')
    }
    const goToSignIn = ()=>{
        navigation.navigate('SignIn')
    }
   
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
            <Text style={styles.title}>Confirmar E-mail</Text>       

             <CustomInput placeholder='Ingresar el código de verificación' value={code} setValue={setCode} />

             <CustomButton onPress={confirm} text={"Confirmar"} />

             <CustomButton onPress={resend} text={"Reenviar código"} type='SECONDARY'/>
             <CustomButton onPress={goToSignIn} text={"Volver a Sign In"} type='TERTIARY'/>

            </View>
        </ScrollView>
        
    )
}

const styles= StyleSheet.create({
    root:{
      alignItems:'center',
      padding: 20,
    },
    logo:{
      width: '70%',
      maxWidth:300,
      maxHeight: 200,
      borderRadius: 15
    },
    title:{
        fontSize:24,
        fontWeight:'bold',
        color: '#051c60',
        margin: 10,
    },
    text:{
        color:'grey',
        marginVertical:10,
    },
    link:{
        color:'blue'
    }
  })
