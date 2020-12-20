import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';

export default function App() {

  const [number, setNumber] = useState('');

  return (
    <View style={styles.container}>
      <View></View>
      <Text style={styles.label}>Digite o número abaixo</Text>
      <TextInputMask
        style={styles.input}
        placeholder="(99) 9 9999-9999"
        type={'cel-phone'}
        options={{
          maskType: 'BRL',
          withDDD: true,
          dddMask: '(99) '
        }}
        value={number}
        onChangeText={newNumber => {
          setNumber(newNumber)
        }}
      />
      <TouchableOpacity style={styles.button} accessibilityLabel="Send message" onPress={() => sendMessage(number)}>
        <Text>Enviar mensagem</Text>
      </TouchableOpacity>
    </View>
  );
}

function sendMessage(phoneNumber: string) {
  console.log(phoneNumber);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 25
  },
  input: {
    fontSize: 20,
    borderWidth: 1,
    padding: 4,
    borderRadius: 4,
    marginTop: 5
  },
  button: {
    borderRadius: 4,
    marginTop: 10,
    padding: 5,
    // width: '80%',
    backgroundColor: '#55e678'
  }
});
