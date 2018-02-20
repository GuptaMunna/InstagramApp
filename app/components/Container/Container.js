import React from 'react';
import { Text, View } from 'react-native';
import style from './style';
import PropTypes from 'prop-types';

const Container = ({ children }) => <View style={style.container}>{children}</View>;

Container.prototype = {
	children: PropTypes.any,
};
export default Container;
