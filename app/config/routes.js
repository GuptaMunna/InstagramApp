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

export const HomeStack = StackNavigator(
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

export const TabNavigation = TabNavigator(
	{
		HomeTab: {
			screen: HomeTab,
			navigationOptions: {
				tabBarIcon: ({ tintColor }) => <Icon name="ios-home" style={{ color: tintColor }} />,
			},
		},
		AddMediaTab: {
			screen: AddMediaTab,
			navigationOptions: {
				tabBarIcon: ({ tintColor }) => <Icon name="ios-add-circle" style={{ color: tintColor }} />,
			},
		},
		LikeTab: {
			screen: LikeTab,
			navigationOptions: {
				tabBarIcon: ({ tintColor }) => <Icon name="ios-heart" style={{ color: tintColor }} />,
			},
		},

		ProfileTab: {
			screen: ProfileTab,
			navigationOptions: {
				tabBarIcon: ({ tintColor }) => <Icon name="person" style={{ color: tintColor }} />,
			},
		},
		SearchTab: {
			screen: SearchTab,
			navigationOptions: {
				tabBarIcon: ({ tintColor }) => <Icon name="ios-search" style={{ color: tintColor }} />,
			},
		},
	},

	{
		animationEnabled: true,
		swipeEnabled: false,
		tabBarPosition: 'bottom',
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
			activeTintColor: '#000',
			inactiveTintColor: '#d1cece',
		},
	}
);
