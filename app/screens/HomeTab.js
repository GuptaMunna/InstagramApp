//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'native-base';

class HomeTab extends Component {
	static navigationOptions = {
		tarBarIcon: ({ tintColor }) => <Icon name="ios-home" style={{ color: tintColor }} />,
	};
	render() {
		return (
			<View style={style.home}>
				<Text>Home tab</Text>
			</View>
		);
	}
}

const style = StyleSheet.create({
	home: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#2c3e50',
	},
});
export default HomeTab;
