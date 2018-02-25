import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Thumbnail, Icon } from 'native-base';

export default class HorizontalThumbnailList extends Component {
	renderRecentStories(data) {
		return data.map((item, key) => <Thumbnail key={key} source={item.img} style={styles.stories_thumbnail} />);
	}

	render() {
		return (
			<View style={styles.stories_container}>
				<ScrollView
					horizontal={true}
					showsHorizontalScrollIndicator={false}
					contentContainerStyle={{ alignItems: 'center', paddingStart: 8, paddingEnd: 8 }}
				>
					{this.renderRecentStories(this.props.dataList)}
				</ScrollView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	stories_container: {
		flex: 3,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingHorizontal: 2,
	},
	stories_thumbnail: {
		marginHorizontal: 5,
		borderColor: 'grey',
		borderWidth: 2,
	},
});
