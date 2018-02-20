import React from 'react';
import { StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Icon } from 'native-base';

import Home from '../screens/Home';

const HomeStack = StackNavigator(
	{
		Home: {
			screen: Home,
			navigationOptions: {
				headerLeft: <Icon name="ios-camera-outline" style={{ paddingLeft: 15 }} />,
				title: 'Instagram',
				headerRight: <Icon name="ios-send-outline" style={{ paddingRight: 15 }} />,
			},
		},
	},
	{}
);

export default StackNavigator(
	{
		Home: {
			screen: HomeStack,
		},
	},
	{
		mode: 'modal',
		headerMode: 'none',
	}
);
