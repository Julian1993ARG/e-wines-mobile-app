import { View, Text, StyleSheet } from 'react-native'

export default function CreatePublicationScreen () {
  return (
    <View style={styles.root}>
      <Text>
        CreatePublicationScreen
      </Text>
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
