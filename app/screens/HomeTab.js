//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon, Left, Right, Body, Container, Content } from 'native-base';
import ListCards from '../components/ListCards';
import Stories from '../components/Stories';

import { getRandomeData } from '../data/dummy_data';
import InstaHeader from '../components/InstaHeader';
const CARD_COUNT = 20;

class HomeTab extends Component {
	renderInstaCards(data) {
		return data.map((item, key) => {
			console.log(JSON.stringify(item));
			return <ListCards key={key} like={item.like} image={item.image} thumbnail={item.thumbnail} />;
		});
	}

	getLeftIcon() {
		return <ListCards key={key} like={item.like} image={item.image} thumbnail={item.thumbnail} />;
	}
	render() {
		return (
			<Container style={style.home}>
				<InstaHeader
					isIcon
					header="Instagram"
					leftButtonIcon="ios-camera-outline"
					rightButtonIcon="ios-send-outline"
				/>
				<Content style={{ paddingTop: 5 }}>
					<Stories />
					{this.renderInstaCards(getRandomeData(CARD_COUNT))}
				</Content>
			</Container>
		);
	}
}

const style = StyleSheet.create({
	home: {
		flex: 1,
		backgroundColor: 'white',
	},
});
export default HomeTab;
