import React, { useState } from "react";
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView, TextInput} from "react-native";
import Logo from '../../assets/Ewines/e-wine.png'
import CustomButton from "../../src/components/CustomButton/CustomButton";
import CustomInput from "../../src/components/CustomInput/CustomInput";
import SocialSignUpButton from "../../src/components/SocialSignInButtons/SocialSignInButtons";
import {useNavigation} from '@react-navigation/native'
import {useForm} from 'react-hook-form'


export default function SignInScreen (){
    // const [username,setUsername]=useState('')
    // const [password,setPassword]=useState('')

    const {height}= useWindowDimensions();
    const navigation = useNavigation()
    const {control,handleSubmit, formState:{errors}} = useForm()
    console.log(errors)

    const onSignInPressed = (data)=>{
        console.log(data)
        // validate user
        navigation.navigate('Home')
    }
    const onForgotPassword = ()=>{
        navigation.navigate('ForgotPasswordScreen')
    }

    const onSignUpPress = ()=>{
        navigation.navigate('SignUpScreen')
    }
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
             <Image source={Logo} style={[styles.logo, {height:height*0.3}]} resizeMode="contain" />
            
             <CustomInput name={'username'} placeholder='Username' control={control}  rules={{required:'Se requiere username',minLength:{value:5,message:'Usernarme debe tener al menos 5 caracteres'},maxLength:{value:20,message:'Username solo puede tener 20 caracteres como máximo'}}}/>
             <CustomInput name={'password'} placeholder='Password' control={control} rules={{required:'Se requiere password',minLength:{value:8,message:'Password debe tener al menos 8 caracteres'},maxLength:{value:20,message:'Password solo puede tener 20 caracteres como máximo'}}} secureTextEntry/>
             
            

             <CustomButton onPress={handleSubmit(onSignInPressed)} text={"Sign In"} />

             <CustomButton onPress={onForgotPassword} text={"Olvidé mi contraseña"} type='TERTIARY'/>

             <SocialSignUpButton />
            
             <CustomButton onPress={onSignUpPress} text={"No tienes cuenta? Crear cuenta"} type='TERTIARY'/>
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
    }
  })
