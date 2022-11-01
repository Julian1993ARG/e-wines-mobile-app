import React, { useEffect } from 'react'
import { StyleSheet, ScrollView, SafeAreaView } from 'react-native'
import Card from '../../src/components/Card'
import { getAllPublications, getAllProduct } from '../../src/store/actions'
import { useDispatch, useSelector } from 'react-redux'
import TextStyle from '../../src/components/TextStyle'
import { Layout, Text } from '@ui-kitten/components'

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch()
  const publications = useSelector(state => state.publications)
  // console.log(publications[0])
  useEffect(() => {
    dispatch(getAllPublications())
    dispatch(getAllProduct())
  }, [])
  const onPress = (publication) => {
    navigation.push('PublicationDetailScreen', { ...publication })
  }
  return (
    <Layout>
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
          <Text category='h1' status='control'>Publications</Text>
          {(typeof (publications) === 'string')
            ? <TextStyle>{publications}</TextStyle>
            : publications.map((publi, i) => <Card
                key={i} price={publi.price} id={publi.id} title={publi.title} img={publi.image}
                onPress={() => onPress(publi)}
                                             />)}
        </ScrollView>
      </SafeAreaView>
    </Layout>
  )
}

const styles = StyleSheet.create({
  container: {

    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: '5%'
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
