import i18n from 'i18n-js';
import React from 'react';
import { Image, Text, View } from 'react-native';
import styled from 'styled-components/native';

export default function Header() {
    return (
        <ToolbarContainer>
            <ToolbarLogo source={require("src/assets/image/icon.png")} />
            <ToolbarText>
                {i18n.t('toolbarText')}
            </ToolbarText>
        </ToolbarContainer>
    );
}

const ToolbarContainer = styled(View)`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    height: 60px;
    background-color: lightgray;
`;

const ToolbarLogo = styled(Image)`
    width: 50px;
    height: 50px;
`;

const ToolbarText = styled(Text)`
    color: white;
    font-size: 25px;
    text-align: center;
`;