# react-native-simple-layout

A simple semantic layout for react-native.

![ios](./assets/ios.png)

## Install

###### use yarn

```shell
yarn add react-native-simple-layout
```

###### use npm

```shell
npm i react-native-simple-layout
```

## Example

```typescript
function RectList() {
  return (
    <>
      <Rect text={1} style={{ backgroundColor: 'red' }} />
      <Rect text={2} style={{ backgroundColor: 'green' }} />
      <Rect text={3} style={{ backgroundColor: 'blue' }} />
    </>
  );
}
```

### Row

![row](./assets/row.png)

```typescript
import { Row } from 'react-native-simple-layout';

function RowExample() {
  return (
    <Row>
    	<RectList />
    </Row>
  );
}
```

### Column

![row](./assets/column.png)

```typescript
import { Column } from 'react-native-simple-layout';

function ColumnExample() {
  return (
    <Column>
    	<RectList />
    </Column>
  );
}
```

### Stack

![row](./assets/stack.png)

```typescript
import { Row, Stack } from 'react-native-simple-layout';

function StackExample() {
  return (
    <Row>
      <Rect text={1} />
      <Stack style={{ left: 30, top: 30 }}>
        <Rect text={2} style={{ backgroundColor: 'green' }} />
        <Stack style={{ left: 30, top: 30 }}>
          <Rect text={3} style={{ backgroundColor: 'blue' }} />
        </Stack>
      </Stack>
    </Row>
  );
}
```
