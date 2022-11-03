import { Image, StyleSheet, View } from 'react-native'
import { Button, ListItem, ListItemProps, Text } from '@ui-kitten/components'
import { setCarrito } from '../../store/actions'
import { useDispatch, useSelector } from 'react-redux'

const CardCart = (props) => {
  // const dispatch = useDispatch()
  console.log(props)

  // const set = (symbol) => {
  //   if (symbol === '+' && item.cant < item.count) { // si es + y la cantidad es menor a la cantidad de stock
  //     item.cant++
  //   } else if (symbol === '-' && item.cant > 1) {
  //     item.cant--
  //   }
  //   const values = {
  //     id: item.id,
  //     cant: item.cant
  //   }
  //   dispatch(setCarrito(values))
  // }

  return (

    <Text>hola</Text>
  )
}

export default CardCart
