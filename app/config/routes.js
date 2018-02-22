//@ts-check
import React from 'react';
import { StatusBar, Platform } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { Icon } from 'native-base';

import Home from '../screens/Home';
import AddMediaTab from '../screens/AddMediaTab';
import LikeTab from '../screens/LikeTab';
import ProfileTab from '../screens/ProfileTab';
import SearchTab from '../screens/SearchTab';
import HomeTab from '../screens/HomeTab';

const HomeStack = StackNavigator(
	{
		Home: {
			screen: HomeTab,
			navigationOptions: {
				headerLeft: <Icon name="ios-camera-outline" style={{ paddingLeft: 15 }} />,
				title: 'Instagram',
				headerRight: <Icon name="ios-send-outline" style={{ paddingRight: 15 }} />,
			},
		},
	},
	{}
);
const TabNavigation = TabNavigator(
	{
		HomeTab: {
			screen: HomeStack,
		},
		AddMediaTab: {
			screen: AddMediaTab,
		},
		LikeTab: {
			screen: LikeTab,
		},
		ProfileTab: {
			screen: ProfileTab,
		},
		SearchTab: {
			screen: SearchTab,
		},
	},
	{
		tabBarPosition: 'bottom',
		animationEnabled: true,
		swipeEnabled: false,
		tabBarOptions: {
			style: {
				...Platform.select({
					android: {
						backgroundColor: 'white',
					},
				}),
			},
			showIcon: true,
			showLabel: false,
			activeTintColor: '#fff',
			inactiveTintColor: '#d1cece',
		},
	}
);

export default TabNavigation;
