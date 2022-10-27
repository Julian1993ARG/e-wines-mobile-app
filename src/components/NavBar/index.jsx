import React from 'react'
import { ScrollView, StyleSheet, TouchableWithoutFeedback, View } from 'react-native'
import TextStyle from '../TextStyle'
import theme from '../../theme'
import Constants from 'expo-constants'
import { Link, useLocation } from 'react-router-native'

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.backgroundColors.primary,
    flexDirection: 'row',
    paddingTop: Constants.statusBarHeight + 5,
    paddingLeft: 10
  },
  text: {
    paddingHorizontal: 10,
    color: theme.colors.primary,
    fontSize: theme.fontSizes.medium
  },
  scroll: {
    paddingBottom: 20
  },
  active: {
    color: '#56070C',
    textDecorationLine: 'underline'
  }
})
const AppBarTab = ({ children, to }) => {
  const { pathname } = useLocation()
  const active = pathname === to
  const textStyles = [
    styles.text,
    active && styles.active
  ]
  return (
    <Link to={to} component={TouchableWithoutFeedback}>
      <TextStyle style={textStyles} fontWeight='bold'>
        {children}
      </TextStyle>
    </Link>
  )
}
const NavBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal style={styles.scroll}>
        <AppBarTab to='/'>SignIn</AppBarTab>
        <AppBarTab to='/home'>Home</AppBarTab>
      </ScrollView>
    </View>
  )
}

export default NavBar
