import { View, Text, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'

export default function ProfileScreen () {
  const user = useSelector(state => state.user)
  return (
    <View style={styles.root}>
      <Text>
        Profile Screen
      </Text>
      <Text>
        {user.email}
      </Text>
      <Text>
        {user.username}
      </Text>
      <Text>
        {user.region}
      </Text>
      <Text>
        {user.id}
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
