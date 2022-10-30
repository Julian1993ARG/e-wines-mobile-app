import React from 'react'
import { View, Image, TouchableOpacity, StyleSheet, Pressable } from 'react-native'//eslint-disable-line
import TextStyle from '../TextStyle'
// import { Link } from 'react-router-native'

const Card = ({ img, title, price, id, onPress }) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={onPress}>
        <Image style={styles.img} source={{ uri: img }} resizeMode='contain' />
        <View style={styles.text}>
          <TextStyle fontSize='title' align='center' fontWeight='bold' style={styles.title}>{title}</TextStyle>
          <TextStyle fontSize='medium' fontWeight='bold'>${price}</TextStyle>
        </View>

      </Pressable>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
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

export default Card
