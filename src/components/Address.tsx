import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const AddressBar: React.FC = () => {
  const address = 'Diliver to XYZ - 12345';

  return (
    <View style={styles.container}>
      <Icon name="map-marker" size={20} color="#ffffff" style={styles.icon} />
      <Text style={styles.addressText} numberOfLines={1}>
        {address}
      </Text>
      <TouchableOpacity>
        <Icon name="edit" size={20} color="#ffffff" style={styles.editIcon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FC8F54',
    padding: 10,
    // borderRadius: 10,
    //marginHorizontal: 15,
    // marginVertical: 5,
  },
  icon: {
    marginRight: 10,
    marginHorizontal: 15,
  },
  addressText: {
    flex: 1,
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    //marginHorizontal: 15,
  },
  editIcon: {
    marginLeft: 10,
  },
});

export default AddressBar;
