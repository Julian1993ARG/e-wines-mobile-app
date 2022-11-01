// import { useNavigation } from '@react-navigation/native'
import { useSelector, useDispatch } from 'react-redux'
import CustomButton from '../../src/components/CustomButton/CustomButton'
import { logout } from '../../src/store/actions'
import { storeData } from '../../src/utils/utilities'
import { Layout, Text, Button } from '@ui-kitten/components'

export default function ProfileScreen ({ checkLogin }) {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)

  const cerrarSesion = async () => {
    await storeData('TOKEN', null, true)
    dispatch(logout())
    checkLogin()
  }
  return (
    <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text category='h1'>
        Profile Screen
      </Text>
      <Text>
        {user.email}
      </Text>
      <Text>
        {user.username}
      </Text>
      <Text>
        {user.id}
      </Text>
      <Button onPress={cerrarSesion}>Cerrar Sesion</Button>
    </Layout>
  )
}

// const styles = StyleSheet.create({
//   root: {
//     alignItems: 'center',
//     alignContent: 'center',
//     fontSize: 24
//   }
// })
