import React from 'react'
import { View, ImageBackground, StyleSheet, Dimensions } from 'react-native'//eslint-disable-line
import { Text, Button, Card } from '@ui-kitten/components'
import MaterialComunityIcons from 'react-native-vector-icons/Ionicons'
import { addCarrito } from '../../store/actions'
import { useDispatch } from 'react-redux'

export const CartIcon = () => (
  <MaterialComunityIcons name='cart' size={25} color='#fff' />
)

const Header = ({ img }) => (
  <View>
    <ImageBackground source={{ uri: img }} style={styles.img} />
  </View>
)

const Footer = ({ data, navigation }) => {
  const dispatch = useDispatch()
  const { title, name, price, count, image, cellar, origin, varietal, description, id } = data //eslint-disable-line
  return (
    <View style={styles.itemFooter}>
      <Text category='s1'>$ {price}</Text>
      <Button
        style={styles.iconButton}
        size='small'
        accessoryLeft={CartIcon}
        onPress={() => {
          dispatch(addCarrito({ title, name, price, count, image, cellar, origin, varietal, description, id, cant: 1 }))
          navigation.navigate('CartScreen')
        }}
      />
    </View>
  )
}

const CardHome = ({ title, name, price, image, onPress, item, navigation }) => {
  return (
    <Card
      header={() => <Header img={image} />}
      footer={() => <Footer data={item} navigation={navigation} />}
      onPress={onPress}
      style={styles.card}
    >
      <View style={styles.item}>
        <Text category='s1'>{title}</Text>
        <Text
          appearance='hint'
          category='c1'
        >
          {name}
        </Text>
      </View>
    </Card>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10
  },
  img: {
    height: 140
  },
  text: {
    marginVertical: 30
  },
  item: {
    minHeight: 60
  },
  iconButton: {
    paddingHorizontal: 0
  },
  itemFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20
  },
  card: {
    flex: 1,
    margin: 8,
    maxWidth: Dimensions.get('window').width / 2 - 24
  }
})

export default CardHome
