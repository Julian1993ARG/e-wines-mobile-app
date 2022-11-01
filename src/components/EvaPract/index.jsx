import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Layout, Text, Button, Spinner } from '@ui-kitten/components'

const LoadingIndicator = (props) => (
  <View style={[props.style, styles.indicator]}>
    <Spinner size='small' />
  </View>
)

const EvaPract = () => (
  <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text category='h1'>HOME</Text>
    <Button style={styles.button} appearance='outline' accessoryLeft={LoadingIndicator}>
      LOADING
    </Button>
  </Layout>
)

export default EvaPract
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  button: {
    margin: 2
  },
  indicator: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})
