import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Container, Content, Thumbnail, Button, Icon } from 'native-base';

export default class MyDetail extends Component {
	render() {
		return (
			<View style={style.profile_top}>
				<View style={{ flex: 1 }}>
					<Image source={require('../images/1.jpeg')} style={style.stories_thumbnail} />
				</View>
				<View style={{ flex: 3 }}>
					<View style={style.profile_count}>
						<View style={{ alignItems: 'center' }}>
							<Text>20</Text>
							<Text style={{ fontSize: 10, color: 'grey' }}>Posts</Text>
						</View>

						<View style={{ alignItems: 'center' }}>
							<Text>230</Text>
							<Text style={{ fontSize: 10, color: 'grey' }}>Followers</Text>
						</View>

						<View style={{ alignItems: 'center' }}>
							<Text>220</Text>
							<Text style={{ fontSize: 10, color: 'grey' }}>Following</Text>
						</View>
					</View>
					<View style={{ flexDirection: 'row' }}>
						<Button bordered dark style={{ flex: 3, justifyContent: 'center', height: 30 }}>
							<Text>Edit Profile</Text>
						</Button>
						<Button bordered dark style={style.profile_setting}>
							<Icon name="settings" />
						</Button>
					</View>
				</View>
			</View>
		);
	}
}

const style = StyleSheet.create({
	home: {
		flex: 1,
		backgroundColor: 'white',
	},
	profile_top: {
		flex: 1,
		flexDirection: 'row',
	},
	profile_count: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingRight: 10,
		paddingLeft: 10,
	},
	stories_thumbnail: {
		flex: 1,
		width: 75,
		height: 75,
		borderRadius: 36.5,
		marginHorizontal: 5,
		borderColor: 'grey',
		borderWidth: 2,
	},
	profile_setting: {
		marginLeft: 5,
		marginRight: 10,
		flex: 1,
		justifyContent: 'center',
		height: 30,
	},

	tab_container: {
		flex: 1,
		flexDirection: 'row',
		marginLeft: 10,
		marginRight: 10,
		marginTop: 10,
		justifyContent: 'space-between',
	},
});
