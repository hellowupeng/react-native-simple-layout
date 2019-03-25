import React from 'react';
import { View } from 'react-native';
import styles from './style';

export function Row(props) {
  return <View {...props} style={[styles.row, props.style]} />;
}

export function Column(props) {
  return <View {...props} style={[styles.column, props.style]} />;
}

export function Stack(props) {
  return <View {...props} style={[styles.stack, props.style]} />;
}