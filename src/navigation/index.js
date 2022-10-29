import { NavigationContainer } from '@react-navigation/native'
// import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ConfirmEmailScreen from '../../screens/ConfirmEmailScreen/ConfirmEmailScreen.js'
import ForgotPasswordScreen from '../../screens/ForgotPasswordScreen/ForgotPasswordScreen.js'
import NewPasswordScreen from '../../screens/NewPasswordScreen/NewPasswordScreen.js'
import SignInScreen from '../../screens/SignInScreen/SignInScreen.js'
import SignUpScreen from '../../screens/SignUpScreen/SignUpScreen.js'
import CreatePublicationScreen from '../../screens/CreatePublicationScreen'
import ProfileScreen from '../../screens/ProfileScreen'
import HomeScreen from '../../screens/Home'
import PublicationDetailScreen from '../../screens/PublicationDetailDcreen'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
// import NavBar from '../../screens/NavBar/index.jsx'

const AuthStack = createStackNavigator()
const Tabs = createBottomTabNavigator()
const HomeStack = createStackNavigator()
const ProfileStack = createStackNavigator()
const CreatePublicationStack = createStackNavigator()

export default function Navigation () {
  const user = useSelector(state => state.user)
  const [userToken, setUserToken] = useState('')//eslint-disable-line
  const HomeStackScreen = () => {
    return (
      <HomeStack.Navigator>
        <HomeStack.Screen name='HomeScreen' component={HomeScreen} />
        <HomeStack.Screen name='PublicationDetailScreen' component={PublicationDetailScreen} />
      </HomeStack.Navigator>
    )
  }
  const CreatePublicationStackScreen = () => {
    return (
      <CreatePublicationStack.Navigator>
        <CreatePublicationStack.Screen name='CreatePublicationScreen' component={CreatePublicationScreen} />
      </CreatePublicationStack.Navigator>
    )
  }
  const ProfileStackScreen = () => {
    return (
      <ProfileStack.Navigator>
        <ProfileStack.Screen name='ProfileStack' component={ProfileScreen} />
      </ProfileStack.Navigator>
    )
  }
  useEffect(() => {
    if (user.token) setUserToken(user.token)
  }, [user, userToken])
  return (
    <NavigationContainer>
      {
      userToken
        ? (<Tabs.Navigator screenOptions={{ headerShown: false }}>
          <Tabs.Screen name='HomeStack' component={HomeStackScreen} />
          <Tabs.Screen name='CreatePublicationStack' component={CreatePublicationStackScreen} />
          <Tabs.Screen name='ProfileStack' component={ProfileStackScreen} />
          </Tabs.Navigator>) //eslint-disable-line
        : <AuthStack.Navigator screenOptions={{ headerShown: false }}>
          <AuthStack.Screen name='SignIn' component={SignInScreen} />
          <AuthStack.Screen name='SignUpScreen' component={SignUpScreen} />
          <AuthStack.Screen name='ConfirmEmailScreen' component={ConfirmEmailScreen} />
          <AuthStack.Screen name='ForgotPasswordScreen' component={ForgotPasswordScreen} />
          <AuthStack.Screen name='NewPasswordScreen' component={NewPasswordScreen} />
        </AuthStack.Navigator>//eslint-disable-line
        }
    </NavigationContainer>
  )
}
