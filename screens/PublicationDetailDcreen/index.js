import { View, Text, StyleSheet } from 'react-native'

export default function PublicationDetailScreen ({ route }) {
  return (
    <View style={styles.root}>
      <Text>
        Profile Screen
      </Text>
      {route.params && <Text>{route.params.title}</Text>}
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
