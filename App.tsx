
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import React from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';
import messages_en from "src/translations/en.json";
import messages_pt from "src/translations/pt.json";
import styled from 'styled-components/native';
import Header from './src/components/header/Header';
import Sender from './src/components/sender/Sender';


i18n.translations = {
  pt: messages_pt,
  br: messages_pt,
  en: messages_en,
};

i18n.fallbacks = true;

i18n.locale = Localization.locale.split('-')[0];

export default function App() {

  return (
    <OverallContainer>
      <Header></Header>
      <MainContainer>
        <Sender></Sender>
      </MainContainer>
    </OverallContainer>
  );
}

const OverallContainer = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}px;
  background-color: #fff;
`;

const MainContainer = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
