import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import React, { useState } from 'react';
import { Linking, StyleSheet, Image, Text, TouchableOpacity, View, SafeAreaView, StatusBar } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import messages_en from "./translations/en.json";
import messages_pt from "./translations/pt.json";

i18n.translations = {
  pt: messages_pt,
  en: messages_en,
};

i18n.fallbacks = true;

i18n.locale = Localization.locale.split('-')[0];

export default function App() {

  const [number, setNumber] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.toolbarContainer}>
        <Image
          style={styles.toolbarLogo}
          source={require('./assets/icon.png')}
        />
        <Text style={styles.toolbarText}>
          {i18n.t('toolbarText')}
        </Text>
      </View>
      <View style={styles.mainContainer}>
        <Text style={styles.label}>
          {i18n.t('label')}
        </Text>
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
          <Text style={styles.buttonText}>
            {i18n.t('buttonText')}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
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
    marginTop: StatusBar.currentHeight,
    backgroundColor: '#fff',
  },
  toolbarContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 60,
    backgroundColor: 'black',
  },
  toolbarLogo: {
    width: 50,
    height: 50
  },
  toolbarText: {
    color: 'white',
    fontSize: 25,
    textAlign: 'center',
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
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
