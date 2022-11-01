
import { View, Text, TextInput, StyleSheet } from 'react-native'
import { Controller } from 'react-hook-form'

export default function CustomInput ({ control, name, rules = {}, placeholder, secureTextEntry }) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
        <>
          <View style={[styles.container, { borderColor: error ? 'red' : '#E8E8E8' }]}>
            <TextInput
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder={placeholder}
              style={[styles.input, {}]}
              secureTextEntry={secureTextEntry}
            />
          </View>
          {error && <Text style={{ color: 'red', alignSelf: 'stretch' }}>{error.message || 'Error'}</Text>}
        </>
      )}
    />
  )
};

const styles = StyleSheet.create({
  container: {
    width: '100%',

    borderColor: '#E8E8E8',
    borderWidth: 1,
    borderRadius: 5,

    paddingHorizontal: 10,
    marginVertical: 5
  },
  input: {}
})
