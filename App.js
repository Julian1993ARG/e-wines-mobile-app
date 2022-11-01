// import { NativeRouter } from 'react-router-native'
import { StatusBar } from 'expo-status-bar'
// import Main from './src/components'
import { Provider } from 'react-redux'
import { SafeAreaView, StyleSheet } from 'react-native'
import store from './src/store'
import Navigation from './src/navigation/index.js'
import * as eva from '@eva-design/eva'
import { ApplicationProvider } from '@ui-kitten/components'

export default function App () {
  return (
    <>
      <StatusBar style='light' />
      <Provider store={store}>
        <ApplicationProvider {...eva} theme={eva.dark}>
          <SafeAreaView style={styles.root}>
            <Navigation />
          </SafeAreaView>
        </ApplicationProvider>
      </Provider>
    </>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  }
})
