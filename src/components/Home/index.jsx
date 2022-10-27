import React from 'react'
import Cookies from 'universal-cookie'
import { View } from 'react-native'

const Home = () => {
  const cookies = new Cookies()
  const user = cookies.get('TOKEN')
  return (
    <View>
      {console.log(user)}
    </View>
  )
}

export default Home
