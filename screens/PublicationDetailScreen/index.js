import { View, Text, StyleSheet, Image } from 'react-native'

export default function PublicationDetailScreen ({ route }) {
  console.log(route)
  const { title, name, price, count, image, cellar, origin, varietal, description } = route.params
  return (
    <View style={styles.container}>
      <Text>
        {title}
      </Text>
      <Text>
        {price}
      </Text>
      <Text>
        {count}
      </Text>
      <Image style={styles.img} source={image} resizeMode='contain' />
      <Text>
        {cellar}
      </Text>
      <Text>
        {origin}
      </Text>
      <Text>
        {varietal}
      </Text>
      <Text>
        {description}
      </Text>
      {route.params && <Text>{name}</Text>}
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
