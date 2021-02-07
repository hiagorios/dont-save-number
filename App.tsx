
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import React from 'react';
import { Image, SafeAreaView, StatusBar, Text, View } from 'react-native';
import messages_en from "src/translations/en.json";
import messages_pt from "src/translations/pt.json";
import styled from 'styled-components/native';
import GlobalStyle from './src/assets/styles/global-styles';
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
      <GlobalStyle />
      <LogoContainer>
        <AppLogo source={require("src/assets/image/logo_shadowed.png")} />
        <AppTitle>
          {i18n.t('toolbarText')}
        </AppTitle>
      </LogoContainer>
      <MainContainer>
        <Sender></Sender>
      </MainContainer>
    </OverallContainer>
  );
}

const LogoContainer = styled(View)`
  flex-direction: column;
  align-items: center;
  margin: 15% 0;
`;

const AppLogo = styled(Image)`
  width: 150px;
  height: 150px;
`;

const AppTitle = styled(Text)`
  font-size: 24px;
  margin-top: -10px;
`;

const OverallContainer = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  font-family: Roboto-Regular;
  margin-top: ${StatusBar.currentHeight}px;
  background-color: #F0F0F0;
`;

const MainContainer = styled(View)`
  justify-content: center;
  align-items: center;
`;