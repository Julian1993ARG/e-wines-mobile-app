import React from 'react'
import { View, Button } from 'react-native'
import { storeData } from '../../utilities'

const Home = () => {
  console.log(process.env.URL_API)
  return (
    <View>
      <Button title='up' onPress={async () => await storeData('TOKEN', null, true)} />
    </View>
  )
}

export default Home
