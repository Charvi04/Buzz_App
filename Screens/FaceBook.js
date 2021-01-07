import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default class Facebook extends React.Component {
  render() {
    return (
      <View style={styles.background}>
        <TouchableOpacity style={styles.header}>
          <Text style={styles.headerText}>Buzz App</Text>
        </TouchableOpacity>
        <Text style={styles.mainText}>Facebook</Text>

        <Image
          style={styles.imageIcon1}
          source={{ uri: 'https://img.icons8.com/clouds/2x/facebook-new.png' }}
        />
        <Image
          style={styles.imageIcon2}
          source={{ uri: 'https://img.icons8.com/clouds/2x/facebook-new.png' }}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  background: {
    backgroundColor: '#0048a0',
    flex: 1,
  },
  mainText: {
    fontFamily: 'rockwell',
    marginTop: 150,
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
  },
  imageIcon1: {
    width: 70,
    height: 70,
    marginTop: -175,
  },
  imageIcon2: {
    width: 70,
    height: 70,
    marginTop: 210,
    marginLeft: 260,
  },
  header: {
    backgroundColor: '#02d9ff',
    padding: 10,
    textAlign: 'center',
    border: 'solid',
  },
  headerText: {
    fontSize: 20,
    fontFamily: 'rockwell',
    fontWeight: 'bold',
  },
});
