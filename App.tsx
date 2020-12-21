
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import Header from './src/components/header/Header';
import Sender from './src/components/sender/Sender';
import messages_en from "src/translations/en.json";
import messages_pt from "src/translations/pt.json";


i18n.translations = {
  pt: messages_pt,
  br: messages_pt,
  en: messages_en,
};

i18n.fallbacks = true;

i18n.locale = Localization.locale.split('-')[0];

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header></Header>
      <View style={styles.mainContainer}>
        <Sender></Sender>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: '#fff',
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});
