import i18n from 'i18n-js';
import React, { useState } from 'react';
import { Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';

export default function Sender() {

    const [number, setNumber] = useState('');

    return (
        <View style={styles.senderContainer}>
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

const styles = StyleSheet.create({
    senderContainer: {
    },
    label: {
        textAlign: 'center',
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
        textAlign: 'center',
        fontSize: 20,
    }
});