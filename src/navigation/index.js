import react from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ConfirmEmailScreen from '../../screens/ConfirmEmailScreen/ConfirmEmailScreen.js'
import ForgotPasswordScreen from '../../screens/ForgotPasswordScreen/ForgotPasswordScreen.js'
import NewPasswordScreen from '../../screens/NewPasswordScreen/NewPasswordScreen.js'
import SignInScreen from '../../screens/SignInScreen/SignInScreen.js'
import SignUpScreen from '../../screens/SignUpScreen/SignUpScreen.js'
import Home from '../../screens/HomeScreen/HomeScreen.js'

const Stack = createNativeStackNavigator()

export default function Navigation () {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='SignIn' component={SignInScreen} />
        <Stack.Screen name='SignUpScreen' component={SignUpScreen} />
        <Stack.Screen name='ConfirmEmailScreen' component={ConfirmEmailScreen} />
        <Stack.Screen name='ForgotPasswordScreen' component={ForgotPasswordScreen} />
        <Stack.Screen name='NewPasswordScreen' component={NewPasswordScreen} />
        <Stack.Screen name='Home' component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
