import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import AddressBar from './components/Address';
import HomePage from './components/homePage';
import TopCategories from './components/TopCategory';
//import TopCategories from './components/TopCategories';
//import {Text} from 'react-native';
//import { Text } from '@shopify/react-native-skia';
//import SpotLight from './components/SpotLight';
//import SpotLight from './components/SpotLight';
// import one1 from './Images/Jiva-Spotlight-0.webp';
// import two2 from './Images/Jiva-Spotlight.webp';s

function App(): JSX.Element {
  // const spotLight = [one1, two2];
  return (
    <>
      <ScrollView showsVerticalScrollIndicator={true}>
        <View style={styles.container}>
          <HomePage />
          <AddressBar />
          <TopCategories />
        </View>
        {/* <SpotLight /> */}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  topCategory: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },

  spotlightContainer: {
    height: 600,
    width: 400,
    paddingHorizontal: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 20,
  },
  spotlightImage: {
    height: '100%',
    width: '100%',
  },
});

export default App;
