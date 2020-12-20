import React, { useState } from 'react';
import { Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
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
      <TouchableOpacity style={styles.button} accessibilityLabel="Send message" onPress={() => sendMessageAPI(number)}>
        <Text style={styles.buttonText}>Enviar mensagem</Text>
      </TouchableOpacity>
    </View>
  );
}

function sendMessageAPI(phoneNumber: string) {
  const phoneRaw = '+55' + phoneNumber.replace('(', '').replace(')', '').replace('-', '').replace(' ', '')
  Linking.openURL(`https://api.whatsapp.com/send?phone=${phoneRaw}&text=Alo`).then(() => {
    console.log('Sent')
  }).catch(error => {
    console.log(error);
  })
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
    fontSize: 25,
    borderWidth: 1,
    padding: 4,
    borderRadius: 4,
    marginTop: 5
  },
  button: {
    borderRadius: 4,
    marginTop: 10,
    padding: 6,
    backgroundColor: '#55e678'
  },
  buttonText: {
    fontSize: 20,
  }
});
