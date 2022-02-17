import React from 'react';
import type {Node} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/Ionicons'

const Footer: () => Node = () => (
  <>
    <View style={styles.container}>
      <View style={styles.lines} />
      <View>
      
        <Text style={styles.decagon}>Decagon</Text>
      </View>
      <View style={styles.lines} />
    </View>
    <View style={styles.footerStyle}>
      <Text style={styles.footerIcons}>Square </Text>
      <Text style={styles.footerIcons}>Triangle</Text>
    </View>
  </>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  lines: {
    flex: 1,
    height: 1,
    backgroundColor: '#fdbb21',
  },
  decagon: {
    width: 82,
    textAlign: 'center',
    color: '#fdbb21',
    fontWeight: 'bold',
  },
  footerStyle: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
  },
  footerIcons: {
    color: '#fdbb21',
    justifyContent: 'space-between',
    fontWeight: 'bold',
    marginHorizontal: 130,
    marginBottom: 10,
  },
});

export default Footer;
