import React, { useEffect } from 'react'
import { View, Button } from 'react-native'
import { storeData } from '../../utilities'
import { getAllPubli } from '../../store/actions'
import { useDispatch } from 'react-redux'

const Home = () => {
  const dispatch = useDispatch()
  useEffect(() => { dispatch(getAllPubli()) }, [])
  return (
    <View>
      <Button title='up' onPress={async () => await storeData('TOKEN', null, true)} />
    </View>
  )
}

export default Home
