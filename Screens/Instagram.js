import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default class Facebook extends React.Component {
  render() {
    return (
      <View style={styles.background}>
        <TouchableOpacity style={styles.header}>
          <Text style={styles.headerText}>Buzz App</Text>
        </TouchableOpacity>

        <Image
          style={styles.imageIcon}
          source={{
            uri:
              'https://img.freepik.com/free-vector/colorful-smooth-gradient-background_97886-980.jpg?size=626&ext=jpg',
          }}
        />
        <Image
          style={styles.text}
          source={{
            uri:
              'https://serveroutagestatus.com/wp-content/uploads/2020/02/Instagram_Logo.png',
          }}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  background: {
    backgroundColor: '#781cb8',
    flex: 1,
  },
  imageIcon: {
    width: 350,
    height: 500,
  },
  header: {
    backgroundColor: '#f1602e',
    padding: 10,
    textAlign: 'center',
    border: 'solid',
  },
  headerText: {
    fontSize: 20,
    fontFamily: 'rockwell',
    fontWeight: 'bold',
  },
  text: {
    width: 120,
    height: 40,
    marginTop: -340,
    marginLeft: 100,
  },
});
