import React from 'react'
import { TextInput, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    width: '80%',
    borderColor: 'black',
    borderRadius: 6,
    padding: 10,
    margin: 10,
    backgroundColor: 'white'

  },
  error: {
    borderColor: '#d73a4a'
  },
  select: {
    borderWidth: 2
  }
})

const InputStyle = ({ style, select, error, ...props }) => {
  const inputStyle = [
    styles.textInput,
    error && styles.error,
    select && styles.select,
    style
  ]

  return <TextInput style={inputStyle} {...props} />
}

export default InputStyle
