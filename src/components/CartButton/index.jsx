import { Pressable, StyleSheet, Text } from 'react-native'
import MaterialComunityIcons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
// import { Text } from '@ui-kitten/components'

export default function CartButton () {
  const carrito = useSelector(state => state.carrito)
  const navigation = useNavigation()
  return (
    <Pressable style={styles.button} onPress={() => navigation.navigate('CartScreen')}>
      <MaterialComunityIcons name='cart' size={30}>
        {carrito.length ? <Text style={styles.cont}>{carrito.length}</Text> : null}
      </MaterialComunityIcons>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    position: 'relative'
  },
  cont: {
    position: 'absolute',
    top: -5,
    right: -5,
    borderRadius: 50,
    width: 20,
    height: 20,
    textAlign: 'center',
    textAlignVertical: 'center'
  }
})
