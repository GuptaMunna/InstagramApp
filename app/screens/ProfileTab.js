//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Platform, Dimensions } from 'react-native';
import { Container, Content, Thumbnail, Button, Icon } from 'native-base';
import InstaHeader from '../components/InstaHeader';
import ListCards from '../components/ListCards';
import { getRandomeData } from '../data/dummy_data';
import MyDetail from '../components/MyDetail';
const CARD_COUNT = 10;

var { width, height } = Dimensions.get('window');
var widthScreen = width;
class ProfileTab extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeIndex: 1,
		};
	}

	onClick = index => {
		this.setState({ activeIndex: index });
	};

	renderInstaCards(data) {
		return data.map((item, key) => {
			return <ListCards key={key} like={item.like} image={item.image} thumbnail={item.thumbnail} />;
		});
	}

	renderThumbnail(data) {
		return data.map((item, key) => {
			return (
				<View
					key={key}
					style={[
						{
							width: widthScreen / 3,
						},
						{
							height: widthScreen / 3,
						},
						{
							paddingLeft: 2,
						},
						{
							paddingTop: 2,
						},
					]}
				>
					<Image source={{ uri: item.image }} style={{ width: undefined, height: undefined, flex: 1 }} />
				</View>
			);
		});
	}

	renderSelection() {
		if (this.state.activeIndex === 2) {
			return this.renderInstaCards(getRandomeData(CARD_COUNT));
		} else if (this.state.activeIndex === 1) {
			return (
				<View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
					{this.renderThumbnail(getRandomeData(20))}
				</View>
			);
		}
	}

	render() {
		return (
			<Container style={style.home}>
				<InstaHeader header="#sarapaul" leftButtonIcon="md-person-add" rightButtonIcon="back-in-time" />
				<Content style={{ paddingTop: 5 }}>
					<MyDetail />
					<View style={{ marginLeft: 10, marginTop: 5 }}>
						<Text>Sara Paul</Text>
						<Text style={{ fontSize: 12 }}>Model | Singer | Actress</Text>
						<Text style={{ fontSize: 12 }}>www.sarapaul.com</Text>
					</View>
					<View>
						<View style={style.tab_container}>
							<Button transparent onPress={() => this.onClick(1)} active={this.state.activeIndex === 1}>
								<Icon
									name="ios-apps-outline"
									style={[this.state.activeIndex == 1 ? {} : { color: 'grey' }]}
								/>
							</Button>
							<Button transparent onPress={() => this.onClick(2)} active={this.state.activeIndex === 2}>
								<Icon
									name="ios-list-outline"
									style={[this.state.activeIndex == 2 ? {} : { color: 'grey' }]}
								/>
							</Button>
							<Button transparent onPress={() => this.onClick(3)} active={this.state.activeIndex === 3}>
								<Icon
									name="ios-people-outline"
									style={[this.state.activeIndex == 3 ? {} : { color: 'grey' }]}
								/>
							</Button>
							<Button transparent onPress={() => this.onClick(4)} active={this.state.activeIndex === 4}>
								<Icon
									name="ios-bookmark-outline"
									style={[this.state.activeIndex == 4 ? {} : { color: 'grey' }]}
								/>
							</Button>
						</View>
					</View>
					<View>{this.renderSelection()}</View>
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

//make this component available to the app
export default ProfileTab;
