//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class AddMediaTab extends Component {
	render() {
		return (
			<View style={style.home}>
				<Text>Add Media</Text>
			</View>
		);
	}
}

const style = StyleSheet.create({
	home: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'white',
	},
});
//make this component available to the app
export default AddMediaTab;
