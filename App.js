import { NativeRouter } from 'react-router-native'
import { StatusBar } from 'expo-status-bar'
import Main from './src/components'
import { Provider } from 'react-redux'
import store from './src/store'

export default function App () {
  return (
    <>
      <StatusBar style='light' />
      <Provider store={store}>
        <NativeRouter>
          <Main />
        </NativeRouter>
      </Provider>
    </>
  )
}
