import React, { useEffect } from 'react'
import { StyleSheet } from 'react-native'
import Card from '../../src/components/Card'
import { getAllPublications, getAllProduct } from '../../src/store/actions'
import { useDispatch, useSelector } from 'react-redux'
import { Layout, List } from '@ui-kitten/components'
import Filter from '../../src/components/Filters/Filters'

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch()
  const publications = useSelector(state => state.publications)
  useEffect(() => {
    dispatch(getAllPublications())
    dispatch(getAllProduct())
  }, [])
  const onPress = (publication) => {
    navigation.push('PublicationDetailScreen', { ...publication })
  }
  return (

    <Layout>
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
  }
})

export default HomeScreen
