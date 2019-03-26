import React from 'react';
import { View, ViewProps } from 'react-native';
import styles from './style';

export function Row(props: ViewProps) {
  return <View {...props} style={[styles.row, props.style]} />;
}

export function Column(props: ViewProps) {
  return <View {...props} style={[styles.column, props.style]} />;
}

export function Stack(props: ViewProps) {
  return <View {...props} style={[styles.stack, props.style]} />;
}
