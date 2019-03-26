# react-native-simple-layout

A simple Semantic layout for react-native layout.

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