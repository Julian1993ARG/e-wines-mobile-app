import { View, Text, StyleSheet, Image, SafeAreaView } from 'react-native'
import MaterialComunityIcons from 'react-native-vector-icons/Ionicons'

export default function PublicationDetailScreen ({ route }) {
  console.log(route)
  const { title, name, price, count, image, cellar, origin, varietal, description } = route.params
  return (
    <SafeAreaView style={styles.container} showVerticalScrollIndicator={false}>
      <View>
        <Text style={{ fontSize: 30, fontStyle: 'bold' }}>{title}</Text>
        <View>
          <Image style={styles.img} source={image} resizeMode='contain' />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingBottom: 10 }}><Text>Stock: {count}</Text><Text>Precio: {price}</Text></View>
      </View>
      <View style={styles.details}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
          <Text style={styles.title}>{name}</Text>
          <View style={styles.iconContainer}><MaterialComunityIcons name='heart-outline' size={20} /></View>
        </View>
        <View style={{ alignItems: 'center' }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.text}>Origen: {origin}</Text>
            <Text style={styles.text}>Bodega: {cellar}</Text>
          </View>
          <Text style={styles.text}>Varietal: {varietal}</Text>
        </View>
        <Text style={styles.text}>{description}</Text>
      </View>
    </SafeAreaView>
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
  details: {
    // paddingHorizontal: 20,
    width: '100%',
    // height: '100%',
    paddingTop: 40,
    paddingBottom: 120,
    backgroundColor: '#56070C',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40
  },
  img: {
    width: 400,
    height: 300,
    borderRadius: 50
  },
  text: {
    marginTop: 20,
    lineHeight: 22,
    fontSize: 16,
    color: 'white',
    padding: 10
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white'
  },
  iconContainer: {
    backgroundColor: 'white',
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30
  }
})
