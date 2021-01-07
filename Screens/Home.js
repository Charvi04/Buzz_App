import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default class Facebook extends React.Component {
  render() {
    return (
      <View style={styles.background}>
        <TouchableOpacity style={styles.header}>
          <Text style={styles.headerText}>Buzz App</Text>
        </TouchableOpacity>
        <Text style={styles.allText}>
          <Text>
            Omar is a friendly 13 year old kid who likes to keep in touch with
            his friends. He wants to build a social media app called “Buzz App”.
            So, I built this buzz app for him. This app will allow him and his
            friends to visit social media sites like Facebook and Instagram in a
            single app. You can go to different tabs of this apps to go to
            different social media websites. "Get Started"
          </Text>
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  background: {
    backgroundColor: '#54ff00',
    flex: 1,
    border: 'dashed',
  },
  allText: {
    fontFamily: 'rockwell',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    fontSize: 17,
  },
  header: {
    backgroundColor: '#ffc700',
    padding: 10,
    textAlign: 'center',
    border: 'solid',
    width: 300,
    marginLeft: 15,
    marginTop: 10,
  },
  headerText: {
    fontSize: 20,
    fontFamily: 'rockwell',
    fontWeight: 'bold',
  },
});
