import React from 'react';
import { Text, View } from 'react-native';
import { Row, Column, Stack } from '../lib/layout';
import styles from './style';

interface TitleProps {
  children;
}

function Title(props: TitleProps) {
  return <Text style={styles.title}>{props.children}</Text>;
}

interface RectProps {
  style?;
  text;
}

function Rect(props: RectProps) {
  return (
    <View style={[styles.rect, props.style]}>
      <Text>{props.text}</Text>
    </View>
  );
}

function RectList() {
  return (
    <>
      <Rect text={1} />
      <Rect text={2} style={{ backgroundColor: 'green' }} />
      <Rect text={3} style={{ backgroundColor: 'blue' }} />
    </>
  );
}

function RowExample() {
  return (
    <Column>
      <Title>Row</Title>
      <Row>
        <RectList />
      </Row>
    </Column>
  );
}

function ColumnExample() {
  return (
    <Column>
      <Title>Column</Title>
      <Column>
        <RectList />
      </Column>
    </Column>
  );
}

function StackExample() {
  return (
    <Column>
      <Title>Stack</Title>
      <Row>
        <Rect text={1} />
        <Stack style={{ left: 30, top: 30 }}>
          <Rect text={2} style={{ backgroundColor: 'green' }} />
          <Stack style={{ left: 30, top: 30 }}>
            <Rect text={3} style={{ backgroundColor: 'blue' }} />
          </Stack>
        </Stack>
      </Row>
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
