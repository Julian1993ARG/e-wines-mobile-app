import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView} from "react-native";
import CustomButton from "../../src/components/CustomButton/CustomButton";
import CustomInput from "../../src/components/CustomInput/CustomInput";
import {useNavigation} from '@react-navigation/native'
import {useForm} from 'react-hook-form'


export default function NewPasswordScreen (){
    // const [code,setCode]=useState('')
    // const [password,setPassword]=useState('')
    // const [repeatPassword,setRepeatPassword]=useState('')

    const navigation = useNavigation()
    const {control,handleSubmit, formState:{errors}} = useForm()

    const send = ()=>{
        navigation.navigate('Home')
    }

    const goToSignIn = ()=>{
        navigation.navigate('SignIn')
    }
   
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Nueva contraseña</Text>       

                <CustomInput name={'code'} control={control} placeholder='Ingrese el código que le enviamos por email' />
                <CustomInput name={'newPassword'} control={control} placeholder='New password'  secureTextEntry/>
                <CustomInput name={'repeatNewPassword'} control={control} placeholder='Repeat new password'  secureTextEntry/>

                <CustomButton onPress={send} text={"Registrar nueva contraseña"} />

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
    title:{
        fontSize:24,
        fontWeight:'bold',
        color: '#051c60',
        margin: 10,
    },
    text:{
        color:'grey',
        marginVertical:10,
    }
  })
