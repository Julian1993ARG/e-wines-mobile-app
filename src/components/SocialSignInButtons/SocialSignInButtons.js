import React, { useState } from "react";
import { View, Text, StyleSheet, useWindowDimensions, ScrollView} from "react-native";
import CustomButton from "../../components/CustomButton/CustomButton";

export default function SocialSignUpButton (){
    const onSignInFacebook = ()=>{
        console.warn('Sign In with Facebook')
    }
    const onSignInGoogle = ()=>{
        console.warn('Sign In with Google')
    }
    const onSignInApple = ()=>{
        console.warn('Sign In with Apple')
    }
    return(
            <View  style={{width:'100%'}}>
                <CustomButton onPress={onSignInFacebook} text={"Sign In with Facebook"} bgColor="#E7EAF4" fgColor="#4765a9" />
                <CustomButton onPress={onSignInGoogle} text={"Sign In with Google"} bgColor="#FAE9EA" fgColor="#DD4D44"/>
                <CustomButton onPress={onSignInApple} text={"Sign In with Apple"} bgColor="#E3E3E3" fgColor="#363636"/>
            </View>
    )
}