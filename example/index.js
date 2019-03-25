import React from 'react';
import { Text, View } from 'react-native';
import { Row, Column, Stack } from '../lib/layout'
import styles from './style';

function Title(props) {
  return <Text>{props.children}</Text>
}

function Rect(props) {
  return (
    <View style={[styles.rect, props.style]}>
      <Text>{props.text}</Text>
    </View>
  );
}

function TextList() {
  return (
    <>
      <Rect text={1} />
      <Rect text={2} />
      <Rect text={3} />
    </>
  );
}

function RowExample() {
  return (
    <Column>
      <Title>Row</Title>
      <Row>
        <TextList />
      </Row>
    </Column>
  );
}


function ColumnExample() {
  return (
    <Column>
      <Title>Column</Title>
      <Column>
        <TextList />
      </Column>
    </Column>
  );
}


function StackExample() {
  return (
    <Column>
      <Title>Stack</Title>
      <Stack style={{ marginTop: 10 }}>
        <Rect text={3} />
      </Stack>
    </Column>
  );
}

export default function Example() {
  return (
    <Column>
      <RowExample />
      <ColumnExample />
      <StackExample />
    </Column>
  );
}