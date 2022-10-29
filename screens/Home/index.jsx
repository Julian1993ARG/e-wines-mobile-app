import React, { useEffect } from 'react'
import { StyleSheet, ScrollView, SafeAreaView } from 'react-native'
import Card from '../../src/components/Card'
import { getAllPublications, getAllProduct } from '../../src/store/actions'
import { useDispatch, useSelector } from 'react-redux'
import TextStyle from '../../src/components/TextStyle'
// import NavBar from '../NavBar'

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch()
  const publications = useSelector(state => state.publications)
  useEffect(() => {
    dispatch(getAllPublications())
    dispatch(getAllProduct())
  }, [])
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
        <TextStyle fontSize='title' align='center' style={styles.title}>Publications</TextStyle>
        {publications?.map((publi, i) => <Card
          key={i} price={publi.price} id={publi.id} title={publi.title} img={publi.image}
          onPress={() => navigation.push('PublicationDetailScreen', { ...publi })}
                                         />)}
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: '5%'
  },
  title: {
    marginVertical: '5%',
    fontWeight: 'bold'
  },
  scroll: {
    backgroundColor: '#f1f0f0',
    height: '100%',
    marginVertical: 15

  }
})

export default HomeScreen