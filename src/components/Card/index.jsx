import React from 'react'
import { View, Image, StyleSheet, Pressable } from 'react-native'//eslint-disable-line
import { Text, Layout } from '@ui-kitten/components'

const CardHome = ({ img, title, price, id, onPress }) => {
  return (
    <Layout style={styles.container}>

      <Pressable onPress={onPress}>
        <Image style={styles.img} source={{ uri: img }} />
        <View>
          <Text category='h4'>{title}</Text>
          <Text category='h6'>${price}</Text>
        </View>
      </Pressable>
    </Layout>
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
    width: 300,
    height: 300,
    borderRadius: 8
  },
  text: {
    marginVertical: 30
  },
  title: {
    marginVertical: 5
  }
})

export default CardHome
