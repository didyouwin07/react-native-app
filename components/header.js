import React from 'react';
import type {Node} from 'react';
import {Text, View, StyleSheet} from 'react-native';
// import AntIcon from 'react-native-vector-icons/AntDesign';
// import Icon from 'react-native-vector-icons/FontAwesome';

const Header: () => Node = () => (
  <View style={styles.headerStyle}>
    {/* <AntIcon
      name="home"
      size={26}
      style={[styles.leftIcon, styles.headerText]}
    />
    <AntIcon
      name="menuunfold"
      size={26}
      style={[styles.rightIcon, styles.headerText]}
    /> */}
    {/* <Icon name="home" size={26} /> */}
    <Text style={[styles.leftIcon, styles.headerText]}>back </Text>
    <Text style={[styles.rightIcon, styles.headerText]}>menu </Text>
  </View>
);

const styles = StyleSheet.create({
  headerStyle: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    color: '#fdbb21',
    justifyContent: 'space-between',
    fontWeight: 'bold',
  },
  leftIcon: {
    margin: 15,
  },
  rightIcon: {
    margin: 15,
  },
});

export default Header;
