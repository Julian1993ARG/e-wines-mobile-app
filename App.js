import { NativeRouter } from 'react-router-native'
import { StatusBar } from 'expo-status-bar'
import Main from './src/components'

export default function App () {
  return (
    <>
      <StatusBar style='light' />
      <NativeRouter>
        <Main />
      </NativeRouter>
    </>
  )
}
