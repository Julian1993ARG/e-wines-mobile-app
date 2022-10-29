import React from 'react'
import { Text, StyleSheet } from 'react-native'
import theme from '../../utils/theme'

const styles = StyleSheet.create({
  text: {
    color: theme.colors.primary,
    fontSize: theme.fontSizes.small,
    fontWeight: theme.fontWeights.light,
    fontFamily: theme.fontFamily.primary
  },
  colorSecondary: { color: theme.colors.secondary },
  colorError: { color: theme.colors.error }, // This is the way to override the color of the text
  medium: { fontSize: theme.fontSizes.medium },
  title: { fontSize: theme.fontSizes.large }, // This is the only difference from the previous snippet
  bold: { fontWeight: theme.fontWeights.bold },
  regular: { fontWeight: theme.fontWeights.regular },
  textAlign: { textAlign: 'center' } // This is the way to override the text alignment
})

const TextStyle = ({ color, fontSize, fontWeight, style, children, align, ...props }) => {
  const textStyle = [
    styles.text,
    color === 'secondary' && styles.colorSecondary,
    color === 'error' && styles.colorError,
    fontSize === 'medium' && styles.medium,
    fontSize === 'title' && styles.title, // This is the only difference from the previous snippet
    fontWeight === 'bold' && styles.bold,
    fontWeight === 'regular' && styles.regular,
    align === 'center' && styles.textAlign, // This is the way to override the text alignment
    style
  ]

  return (
    <Text style={textStyle} {...props}>
      {children || 'No children'}
    </Text>
  )
}
export default TextStyle
