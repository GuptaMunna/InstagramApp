import React, { Component } from 'react';
import { Card, CardItem, Icon, Left, Thumbnail, Body, Right, Button } from 'native-base';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import HorizontalThumbnail from './HorizontalThumbnailList';
const dataList = [
	{ img: require('../images/1c.jpg') },
	{ img: require('../images/2c.jpg') },
	{ img: require('../images/3c.jpg') },
	{ img: require('../images/4c.jpg') },
	{ img: require('../images/1c.jpg') },
	{ img: require('../images/3.jpg') },
	{ img: require('../images/2c.jpg') },
	{ img: require('../images/3c.jpg') },
	{ img: require('../images/4c.jpg') },
	{ img: require('../images/1c.jpg') },
];
export default class Stories extends Component {
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.container_stories}>
					<Text style={styles.stories}>Stories</Text>
					<View style={styles.watch_all_container}>
						<Icon name="md-play" style={styles.watch_all_icon} />
						<Text style={styles.watch_all}>Watch All</Text>
					</View>
				</View>
				<HorizontalThumbnail dataList={dataList} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		height: 100,
	},
	container_stories: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingHorizontal: 8,
	},
	stories: {
		fontWeight: 'bold',
		fontSize: 14,
	},
	watch_all: {
		fontWeight: 'bold',
		fontSize: 14,
	},
	watch_all_icon: {
		fontSize: 14,
		paddingHorizontal: 4,
	},
	watch_all_container: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	stories_container: {
		flex: 3,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingHorizontal: 8,
	},
	stories_thumbnail: {
		marginHorizontal: 5,
		borderColor: '#FFFFFF',
		borderWidth: 2,
	},
});
