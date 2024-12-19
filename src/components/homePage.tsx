import React from 'react';
import {View, TextInput, StyleSheet, StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface SearchBarProps {
  placeholder?: string;
}

const HomePage: React.FC<SearchBarProps> = ({placeholder}) => {
  return (
    <>
      <StatusBar backgroundColor={'#c74919'} />
      <View style={styles.topBack}>
        <View style={styles.container}>
          <Icon name="search" size={24} color="#000000" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder={placeholder || 'Search for products'}
            placeholderTextColor="#000000"
          />
          <Icon name="qrcode" size={24} color="#000000" style={styles.icon} />
          {/* Microphone Icon */}
          <Icon
            name="microphone"
            size={24}
            color="#000000"
            style={styles.icon}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    margin: 15,
    //marginBlockStart: 20,
  },
  icon: {
    marginRight: 10,
    // marginHorizontal: 10,
    color: '#232F3E',
  },
  input: {
    flex: 1,
    color: '#000000',
    fontSize: 18,
    // marginBlockStart: 10,
  },
  rightIcons: {
    marginHorizontal: 10,
    color: '#232F3E',
  },
  topBack: {
    backgroundColor: '#c74919',
  },
});

export default HomePage;
