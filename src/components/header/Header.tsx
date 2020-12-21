import i18n from 'i18n-js';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function Header() {

    return (
        <View style={styles.toolbarContainer}>
            <Image
                style={styles.toolbarLogo}
                source={require("src/assets/image/icon.png")}
            />
            <Text style={styles.toolbarText}>
                {i18n.t('toolbarText')}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    toolbarContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: 60,
        backgroundColor: 'lightgray',
    },
    toolbarLogo: {
        width: 50,
        height: 50
    },
    toolbarText: {
        color: 'white',
        fontSize: 25,
        textAlign: 'center',
    }
});