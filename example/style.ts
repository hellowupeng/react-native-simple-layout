import { StyleSheet } from 'react-native';

const size = 50;
const styles = StyleSheet.create({
  rect: {
    width: size,
    height: size,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 12,
  },
  title: {
    marginTop: 12,
    fontWeight: 'bold',
    fontSize: 17,
  },
});

export default styles;
