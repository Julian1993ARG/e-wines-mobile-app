import { View, Text, StyleSheet } from 'react-native'

export default function ProfileScreen () {
  return (
    <View style={styles.root}>
      <Text>
        Profile Screen
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
