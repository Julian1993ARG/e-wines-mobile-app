import { NavigationContainer } from '@react-navigation/native'
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
import PublicationDetailScreen from '../../screens/PublicationDetailScreen'
import { useEffect } from 'react'
import MaterialComunityIcons from 'react-native-vector-icons/Ionicons'
import { useLogin } from '../utils/hooks'
import EvaPract from '../components/EvaPract'

const AuthStack = createStackNavigator()
const Tabs = createBottomTabNavigator()
const HomeStack = createStackNavigator()
const ProfileStack = createStackNavigator()
const CreatePublicationStack = createStackNavigator()

export default function Navigation () {
  const { loginState, checkLogin } = useLogin()

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
        <CreatePublicationStack.Screen name='CreatePublicationScreen'>{props => <CreatePublicationScreen {...props} />}</CreatePublicationStack.Screen>
      </CreatePublicationStack.Navigator>
    )
  }
  const ProfileStackScreen = () => {
    return (
      <ProfileStack.Navigator>
        <ProfileStack.Screen name='ProfileStack'>{props => <ProfileScreen {...props} checkLogin={checkLogin} />}</ProfileStack.Screen>
      </ProfileStack.Navigator>
    )
  }
  useEffect(() => {
    checkLogin()
  }, [loginState])
  return (
    <NavigationContainer>
      {
      loginState
        ? (<Tabs.Navigator screenOptions={{ headerShown: false }}>
          <Tabs.Screen name='Home' component={HomeStackScreen} options={{ tabBarIcon: ({ color, size }) => (<MaterialComunityIcons name='home' color={color} size={size} />) }} />
          <Tabs.Screen
            name='Crear Publicación'
            component={CreatePublicationStackScreen}
            options={{ tabBarIcon: ({ color, size }) => (<MaterialComunityIcons name='wine' color={color} size={size} />) }}
          />
          <Tabs.Screen
            name='Perfil'
            options={{ tabBarIcon: ({ color, size }) => (<MaterialComunityIcons name='person' color={color} size={size} />) }}
            component={ProfileStackScreen}
          />
          <Tabs.Screen
            name='EVA'
            options={{ tabBarIcon: ({ color, size }) => (<MaterialComunityIcons name='person' color={color} size={size} />) }}
            component={EvaPract}
          />
           </Tabs.Navigator>) // eslint-disable-line

        : <AuthStack.Navigator screenOptions={{ headerShown: false }}>
          <AuthStack.Screen name='SignIn'>{props => <SignInScreen {...props} checkLogin={checkLogin} />}</AuthStack.Screen>
          <AuthStack.Screen name='SignUpScreen' component={SignUpScreen} />
          <AuthStack.Screen name='ConfirmEmailScreen' component={ConfirmEmailScreen} />
          <AuthStack.Screen name='ForgotPasswordScreen' component={ForgotPasswordScreen} />
          <AuthStack.Screen name='NewPasswordScreen' component={NewPasswordScreen} />
        </AuthStack.Navigator>//eslint-disable-line
        }
    </NavigationContainer>
  )
}
