import React from 'react';
import type {Node} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/Ionicons';

const Footer: () => Node = () => (
  <>
    <View style={styles.container}>
      <View style={styles.lines} />
      <View style={styles.octagon}>
        <View style={[styles.octagonUp, styles.octagonBar]} />
        <View style={[styles.octagonFlat, styles.octagonBar]} />
        <View style={[styles.octagonLeft, styles.octagonBar]} />
        <View style={[styles.octagonRight, styles.octagonBar]} />
      </View>
      <View style={styles.lines} />
    </View>
    <View style={styles.footerStyle}>
      {/* <Text style={styles.footerIcons}>Square </Text> */}
      <View style={[styles.square,styles.footerIcons]} />
      <View style={[styles.triangle,styles.footerIcons]} />
      {/* <Text style={styles.footerIcons}>Triangle</Text> */}
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
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 15,
    borderRightWidth: 15,
    borderBottomWidth: 30,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#fdbb21',
  },
  octagon: {},
  octagonBar: {
    width: 15,
    height: 35,
    backgroundColor: '#fdbb21',
  },
  octagonUp: {},
  octagonFlat: {
    position: 'absolute',
    top: 0,
    left: 0,
    transform: [{rotate: '90deg'}],
  },
  octagonLeft: {
    position: 'absolute',
    top: 0,
    left: 0,
    transform: [{rotate: '-45deg'}],
  },
  octagonRight: {
    position: 'absolute',
    top: 0,
    left: 0,
    transform: [{rotate: '45deg'}],
  },
  square: {
    width: 30,
    height: 30,
    backgroundColor: '#fdbb21',
},
});

export default Footer;
