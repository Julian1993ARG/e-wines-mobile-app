import { Layout, Text, ListItem, Button } from '@ui-kitten/components'
import { setCarrito } from '../../store/actions'
import { useDispatch, useSelector } from 'react-redux'

const CardCart = ({ item }) => {
  const dispatch = useDispatch()

  console.log('item', item.id)

  const up = () => {
    cant++

    const values = {
      id,
      cant
    }
    dispatch(setCarrito(values))
  }

  return (
    <ListItem>
      <Button
        onPress={up}
      >
        +
      </Button>
      <Text>
        sdasdasd
      </Text>
    </ListItem>
  )
}

export default CardCart
