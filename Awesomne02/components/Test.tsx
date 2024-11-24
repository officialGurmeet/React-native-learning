import React from 'react';
import { View, Text, ScrollView, FlatList, StyleSheet } from 'react-native';

const dummyData = Array.from({ length: 10000 }, (_, i) => ({
  id: i.toString(),
  title: `Item ${i + 1}`,
}));

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>ScrollView Example</Text>
      <ScrollView style={styles.scrollView}>
        {dummyData.map(item => (
          <View key={item.id} style={styles.item}>
            <Text>{item.title}</Text>
          </View>
        ))}
      </ScrollView>

      <Text style={styles.header}>FlatList Example</Text>
      <FlatList
        data={dummyData}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 24,
    marginVertical: 10,
  },
  scrollView: {
    marginBottom: 20,
  },
  item: {
    padding: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    marginVertical: 5,
  },
});

export default App;
