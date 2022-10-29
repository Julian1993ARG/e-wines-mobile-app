import { View, StyleSheet } from 'react-native'
import CreatePubli from '../../src/components/CreatePubli'

export default function CreatePublicationScreen () {
  return (
    <View style={styles.root}>
      <CreatePubli />
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    alignContent: 'center',
    fontSize: 24
  }
})
