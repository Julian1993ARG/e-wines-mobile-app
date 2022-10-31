import { View, Text, StyleSheet } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import CustomButton from '../../src/components/CustomButton/CustomButton'
import { logout } from '../../src/store/actions'
import { storeData } from '../../src/utils/utilities'

export default function ProfileScreen () {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)

  const cerrarSesion = async () => {
    await storeData('TOKEN', null, true)
    dispatch(logout())
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
      <Text>
        {user.region}
      </Text>
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
