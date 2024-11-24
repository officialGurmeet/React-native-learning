import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FlatCars() {
  return (
    <View>
      <Text style={styles.heading}>FlatCars</Text>
      <ScrollView horizontal>
        <View style={styles.container}>
          <View style={[styles.card, styles.cardOne]}>
            <Text>Red</Text>
          </View>
          <View style={[styles.card, styles.cardTwo]}>
            <Text>Blue</Text>
          </View>
          <View style={[styles.card, styles.cardThree]}>
            <Text>Green</Text>
          </View>
          <View style={[styles.card, styles.cardFour]}>
            <Text>Yellow</Text>
          </View>
          <View style={[styles.card, styles.cardFour]}>
            <Text>Red</Text>
          </View>
          <View style={[styles.card, styles.cardFour]}>
            <Text>Red</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 10,
  },
  container: {
    padding: 10,
    flex: 1,
    flexDirection: 'row',
    gap: 5,
  },
  card: {
    width: 100,
    height: 100,
    borderRadius: 5,
    textAlign: 'center',
  },
  cardOne: {
    backgroundColor: 'red',
  },
  cardTwo: {
    backgroundColor: 'blue',
  },
  cardThree: {
    backgroundColor: 'green',
  },
  cardFour: {
    backgroundColor: 'yellow',
  },
});
