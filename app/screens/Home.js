import React, { Component } from 'react';
import { View, StatusBar, Text } from 'react-native';

import { Container } from '../components/Container';

export default class Home extends React.Component{
    render() {
        return ( 
        <Container >
            <StatusBar translucent = { false }/> 
            <View>
            <Text> hellow world </Text> 
            </View > 
            </Container>
        );
    }
}
