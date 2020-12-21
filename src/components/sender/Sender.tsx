import i18n from 'i18n-js';
import React, { useState } from 'react';
import { Linking, Text, TouchableOpacity, View } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import styled from 'styled-components/native';

export default function Sender() {

    const [number, setNumber] = useState('');

    return (
        <View>
            <Label>
                {i18n.t('label')}
            </Label>
            <InputMask
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
            <SendButton accessibilityLabel="Send message" onPress={() => sendMessageAPI(number)}>
                <SendButtonText>
                    {i18n.t('buttonText')}
                </SendButtonText>
            </SendButton>
        </View>
    );
}

function sendMessageAPI(phoneNumber: string, message: string = '') {
    const phoneRaw = '+55' + phoneNumber.replace('(', '').replace(')', '').replace('-', '').replace(' ', '')
    Linking.openURL(`https://api.whatsapp.com/send?phone=${phoneRaw}&text=${message}`).then(() => {
        console.log('Sent')
    }).catch(error => {
        console.log(error);
    })
}

const Label = styled(Text)`
    text-align: center;
    font-size: 25px;
`;

const InputMask = styled(TextInputMask)`
    font-size: 25px;
    border-width: 1px;
    padding: 4px;
    border-radius: 4px;
`;

const SendButton = styled(TouchableOpacity)`
    border-radius: 4px;
    margin-top: 10px;
    padding: 6px;
    background-color: #55e678;
`;

const SendButtonText = styled(Text)`
    text-align: center;
    font-size: 20px;
`;