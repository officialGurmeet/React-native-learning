import {StyleSheet, Text, View, useColorScheme} from 'react-native';
import React from 'react';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.container}>
      <Text style={isDarkMode?styles.whiteText:styles.darkText}>App</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({

  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center"
  },
  whiteText:{
    color:"#FFFFFF"
  },
  darkText:{
    color:"#000000"
  }
});
