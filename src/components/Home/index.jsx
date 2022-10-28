import React, { useEffect } from 'react'
import { StyleSheet, ScrollView, SafeAreaView } from 'react-native'
import Card from '../Card'
import { getAllPubli } from '../../store/actions'
import { useDispatch, useSelector } from 'react-redux'
import TextStyle from '../TextStyle'

const Home = () => {
  const dispatch = useDispatch()
  const publications = useSelector(state => state.publications)
  console.log(publications[0])
  useEffect(() => { dispatch(getAllPubli()) }, [])
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
        <TextStyle fontSize='title' align='center' style={styles.title}>Publications</TextStyle>
        {publications?.map((publi, i) => <Card
          key={i} price={publi.price} id={publi.id} title={publi.title} img={publi.image}
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

export default Home
