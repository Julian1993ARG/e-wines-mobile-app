import React, { useEffect } from 'react'
import { StyleSheet } from 'react-native'
import Card from '../../src/components/Card'
import { getAllPublications, getAllProduct, searchPublicationByName } from '../../src/store/actions'
import { useDispatch, useSelector } from 'react-redux'
import { Layout, List } from '@ui-kitten/components'
import Filter from '../../src/components/Filters/Filters'
import MaterialComunityIcons from 'react-native-vector-icons/Ionicons'
import { Searchbar } from 'react-native-paper'
// import { useNavigation } from '@react-navigation/native'

export const CartIcon = () => (
  <MaterialComunityIcons name='cart' size={25} color='#fff' />
)

const HomeScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = React.useState('')
  const dispatch = useDispatch()
  // const navigations = useNavigation()
  const publications = useSelector(state => state.publications)
  useEffect(() => {
    dispatch(getAllPublications())
    dispatch(getAllProduct())
  }, [])
  const onPress = (publication) => {
    navigation.push('PublicationDetailScreen', { ...publication })
  }
  const searchFilterFunction = (search) => {
    console.log('entre')
    dispatch(searchPublicationByName(search))
    console.log('despache')
  }
  const onChangeSearch = query => {
    console.log(searchQuery)
    setSearchQuery(query)
  }
  return (

    <Layout>
      <Searchbar
        placeholder='Search'
        onChangeText={onChangeSearch}
        value={searchQuery}
        onIconPress={() => searchFilterFunction(searchQuery)}
      />
      <Filter />
      <List
        data={publications && publications}
        numColumns={2}
        style={styles.container}
        renderItem={({ item }) => (
          <Card
            price={item.price} id={item.id} title={item.title} img={item.image} name={item.name} onPress={() => onPress(item)}
          />)}
      />
    </Layout>

  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    paddingVertical: 16
  },
  title: {
    marginVertical: '5%',
    fontWeight: 'bold'
  },
  scroll: {
    height: '100%',
    marginVertical: 15
  },
  iconButton: {
    paddingHorizontal: 0,
    width: 20,
    height: 20,
    display: 'flex',
    flexDirection: 'row'
  }
})

export default HomeScreen
