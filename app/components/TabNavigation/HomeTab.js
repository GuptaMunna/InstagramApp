//import liraries
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import style from './style';
import { TabNavigator } from 'react-navigation';

const HomeTab = () => (
	<View style={style.home}>
		<Text>Home tab</Text>
	</View>
);

//make this component available to the app
export default HomeTab;
