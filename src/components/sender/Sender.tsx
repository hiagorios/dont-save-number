import i18n from 'i18n-js';
import React, { useState } from 'react';
import { Linking, Text, TouchableOpacity, View } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import styled from 'styled-components/native';
import { css } from 'styled-components'

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
            <MessageButton accessibilityLabel="Send message" onPress={() => sendMessageAPI(number)}>
                <MessageText>
                    {i18n.t('messageButtonText')}
                </MessageText>
            </MessageButton>
            <CallButton>
                <CallText>
                    {i18n.t('callButtonText')}
                </CallText>
            </CallButton>
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
    font-size: 16px;
`;

const Bordered = css`
    border-width: 1px;
    padding: 4px;
    border-radius: 4px;
`;

const InputMask = styled(TextInputMask)`
    ${Bordered}
    font-size: 25px;
    color: var(--color-gray);
    background-color: white;
`;

const Button = styled(TouchableOpacity)`
    ${Bordered}
    margin-top: 10px;
    padding: 6px;
`;

const MessageButton = styled(Button)`
    background-color: var(--color-green);
`;

const CallButton = styled(Button)`
    background-color: var(--color-yellow);
`;

const ButtonText = styled(Text)`
    text-align: center;
    font-size: 20px;
    color: var(--color-white)
`;

const MessageText = styled(ButtonText)`
    color: var(--color-white);
`;

const CallText = styled(ButtonText)`
    color: var(--color-black);
`;