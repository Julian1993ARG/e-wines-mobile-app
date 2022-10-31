// import { useNavigation } from '@react-navigation/native'
import { View, Text, StyleSheet } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import CustomButton from '../../src/components/CustomButton/CustomButton'
import { logout } from '../../src/store/actions'

export default function ProfileScreen ({ route }) {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  // const navigation = useNavigation()

  const cerrarSesion = () => {
    console.log('222')
    dispatch(logout())
    // navigation.navigate('SignIn')
  }
  return (
    <View style={styles.root}>
      <Text>
        Profile Screen
      </Text>
      <Text>
        {user.email}
      </Text>
      <Text>
        {user.username}
      </Text>
      {/* <Text>
        {user.region}
      </Text> */}
      <Text>
        {user.id}
      </Text>
      <CustomButton text='Cerrar sesión' onPress={cerrarSesion} />
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    alignContent: 'center',
    fontSize: 24
  }
})
