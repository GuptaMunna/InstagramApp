//import liraries
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const style = StyleSheet.create({
	home: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#2c3e50',
	},
});
const SearchTab = () => (
	<View style={style.home}>
		<Text>Search tab</Text>
	</View>
);

//make this component available to the app
export default SearchTab;
