// import { NativeRouter } from 'react-router-native'
import { StatusBar } from 'expo-status-bar'
// import Main from './src/components'
import { Provider } from 'react-redux'
import { SafeAreaView, StyleSheet } from 'react-native'
import store from './src/store'
import Navigation from './src/navigation/index.js'

export default function App () {
  return (
    <>
      <StatusBar style='light' />
      <Provider store={store}>
        <SafeAreaView style={styles.root}>
          <Navigation />
        </SafeAreaView>
        {/* <NativeRouter>
          <Main />
        </NativeRouter> */}
      </Provider>
    </>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC'
  }
})
