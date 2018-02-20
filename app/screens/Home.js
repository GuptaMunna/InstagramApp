import React, { Component } from 'react';
import { View, StatusBar, Text } from 'react-native';
import { Container } from '../components/Container';
import { TabNavigator } from 'react-navigation';
import { HomeTab } from '../components/TabNavigation/HomeTab';

class Home extends Component {
	render() {
		return (
			<Container>
				<StatusBar translucent={false} />
				<View>
					<Text>hellow world</Text>
				</View>
			</Container>
		);
	}
}
