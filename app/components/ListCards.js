//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Card, CardItem, Icon, Left, Thumbnail, Body, Right, Button } from 'native-base';
// create a component
class ListCard extends Component {
	render() {
		return (
			<Card>
				<CardItem>
					<Left>
						<Thumbnail source={require('../images/1.jpeg')} />
						<Body>
							<Text>Sarah </Text>
							<Text>Feb 23, 2018 </Text>
						</Body>
					</Left>
				</CardItem>
				<CardItem cardBody>
					<Image style={styles.cardImage} source={{ uri: this.props.image }} />
				</CardItem>
				<CardItem style={{ height: 45 }}>
					<Left>
						<Button transparent>
							<Icon name="ios-heart-outline" />
						</Button>
						<Button transparent>
							<Icon name="ios-chatbubbles-outline" />
						</Button>
						<Button transparent>
							<Icon name="ios-send-outline" />
						</Button>
					</Left>
				</CardItem>
				<CardItem style={{ height: 20 }}>
					<Text>{this.props.like}</Text>
				</CardItem>
				<CardItem>
					<Body>
						<Text>
							<Text style={{ fontWeight: '900' }}>Sarah </Text>
							It is a long established fact that a reader will be distracted by the readable content of a
							page when looking at its layout. The point of using Lorem Ipsum is that it has a
							more-or-less normal distribution of letters, as opposed to using 'Content here, content
							here', making it look like readable English. Many desktop publishing packages and web page
							editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will
							uncover many web sites still in their infancy. Various versions have evolved over the years,
							sometimes by accident, sometimes on purpose (injected humour and the like)
						</Text>
					</Body>
				</CardItem>
			</Card>
		);
	}
}

// define your styles
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
	},
	cardImage: {
		flex: 1,
		width: null,
		height: 200,
	},
});

//make this component available to the app
export default ListCard;
