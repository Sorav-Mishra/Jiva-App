import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

import one1 from '../images/Jiva-Spotlight-0.webp';
import two2 from '../images/Jiva-Spotlight.webp';

const SpotLight: React.FC = () => {
  const spotLight = [one1, two2];
  return (
    <>
      {/**Services in Spotlight*/}
      <View>
        <Text style={styles.topCategory}>Services in Spotlight</Text>
        <View style={styles.spotlightContainer}>
          {spotLight.map((spot, index) => (
            <Image
              key={index}
              source={spot}
              style={styles.spotlightImage}
              resizeMode="contain"
            />
          ))}
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
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

export default SpotLight;
