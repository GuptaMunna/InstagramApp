import React, { Component } from 'react';
import { Icon, Header, Left, Body, Right } from 'native-base';
import { Text, View, StyleSheet, StatusBar, Platform, ToolbarAndroid } from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';

export default class InstaHeader extends Component {
	renderLeft(isIcon) {
		if (isIcon) {
			return <Icon name={this.props.rightButtonIcon} style={{ paddingRight: 10 }} />;
		} else return <EntypoIcon name={this.props.rightButtonIcon} style={{ paddingRight: 10, fontSize: 32 }} />;
	}
	render() {
		return (
			<Header
				style={{
					backgroundColor: 'white',
					marginTop: StatusBar.currentHeight,
				}}
			>
				<Left>
					<Icon name={this.props.leftButtonIcon} style={{ paddingLeft: 10 }} />
				</Left>
				<Body style={style.body}>
					<Text>{this.props.header}</Text>
				</Body>
				<Right>{this.renderLeft(this.props.isIcon)}</Right>
			</Header>
		);
	}
}
const style = StyleSheet.create({
	body: {
		alignSelf: 'center',
		alignItems: 'center',
	},
});
