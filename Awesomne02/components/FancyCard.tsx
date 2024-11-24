import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.heading}>Treanding places</Text>
      <View style={styles.container}>
        <Image
          source={{
            uri: 'https://images.moneycontrol.com/static-mcnews/2023/04/pexels-ankur-bagai-6440428.jpg?impolicy=website&width=1600&height=900',
          }}
          style={styles.cardImage}
        />
        <View style={styles.imageDetails}>
          <Text style={styles.imageTitle}>Hawa Mahal</Text>
          <Text style={styles.imageLabel}>Jaipur the Pink City</Text>
          <Text style={styles.imageDescription}>
            The Hawa Mahal is a palace in the city of Jaipur, Rajasthan, India.
            Built from red and pink sandstone, it is on the edge of the City
            Palace, Jaipur, and extends to the Zenana, or women's chambers. The
            structure was built in 1799 by the Maharaja Sawai Pratap Singh,
            grandson of Maharaja Sawai Jai Singh, the founder of the city of
            Jhunjhunu in the state of Rajasthan.[1] He was so inspired by the
            unique structure of Khetri Mahal that he built this grand and
            historical palace.
          </Text>
          <Text style={styles.imageFooter}>12 Min Away</Text>
        </View>
      </View>
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
    height: 480,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    margin:10
  },
  cardImage: {
    height: 220,
    borderTopLeftRadius:10,
    borderTopRightRadius:10
  },
  imageDetails: {
    margin: 10,
  },
  imageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  imageLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  imageDescription: {
    fontSize: 14,
    color: 'black',
  },
  imageFooter: {
    paddingTop: 10,
    color: 'black',
    
  },
});
