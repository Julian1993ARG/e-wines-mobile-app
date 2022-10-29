// import React from 'react'
// import { Pressable, ScrollView, StyleSheet, TouchableWithoutFeedback, View } from 'react-native' //eslint-disable-line
// import TextStyle from '../../src/components/TextStyle'
// import theme from '../../src/utils/theme'
// import Constants from 'expo-constants'
// import { Link, useLocation } from 'react-router-native' //eslint-disable-line
// import { useNavigation } from '@react-navigation/native'

// const AppBarTab = ({ children, to, onPress }) => {
//   // const { pathname } = useLocation()
//   const navigation = useNavigation()
//   const active = navigation.Route.name === to
//   const textStyles = [
//     styles.text,
//     active && styles.active
//   ]
//   return (
//     // <Link to={to} component={TouchableWithoutFeedback}>
//     <Pressable onPress={onPress}>
//       <TextStyle style={textStyles} fontWeight='bold'>
//         {children}
//       </TextStyle>
//     </Pressable>
//     // </Link>
//   )
// }
// export default function NavBar ({ route }) {
//   const navigation = useNavigation()
//   const SignInPress = () => {
//     navigation.navigate('SignIn')
//   }
//   return (
//     <View style={styles.container}>
//       <ScrollView horizontal style={styles.scroll}>
//         <AppBarTab onPress={SignInPress} to='SignIn'>SignIn</AppBarTab>
//         <AppBarTab to='Home'>Home</AppBarTab>
//       </ScrollView>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: theme.backgroundColors.primary,
//     flexDirection: 'row',
//     paddingTop: Constants.statusBarHeight + 5,
//     paddingLeft: 10
//   },
//   text: {
//     paddingHorizontal: 10,
//     color: theme.colors.primary,
//     fontSize: theme.fontSizes.medium
//   },
//   scroll: {
//     paddingBottom: 20
//   },
//   active: {
//     color: '#56070C',
//     textDecorationLine: 'underline'
//   }
// })
