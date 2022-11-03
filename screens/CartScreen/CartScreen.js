import { useSelector } from 'react-redux'

import { Layout, Text, List } from '@ui-kitten/components'
import CardCart from '../../src/components/CardCart'

const Cart = () => {
  const carrito = useSelector((state) => state.carrito)
  if (!carrito.length) { return <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><Text category='h2'>No hay productos en el carrito</Text></Layout> }
  return (
    <Layout>
      <List
        data={carrito && carrito}
        renderItem={CardCart}
        keyExtractor={(item) => item.id}
      />
    </Layout>
  )
}

export default Cart
