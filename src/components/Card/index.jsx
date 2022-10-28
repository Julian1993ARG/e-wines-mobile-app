import React from 'react'
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native'
import TextStyle from '../TextStyle'
import { Link } from 'react-router-native'

const Card = ({ img, title, price, id }) => {
  return (
    <View style={styles.container}>
      <Link to={`details/${id}`} component={TouchableOpacity}>
        <Image style={styles.img} source={{ uri: img }} resizeMode='contain' />
        <View style={styles.text}>
          <TextStyle fontSize='title' align='center' fontWeight='bold' style={styles.title}>{title}</TextStyle>
          <TextStyle fontSize='medium' fontWeight='bold'>${price}</TextStyle>
        </View>
      </Link>
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
