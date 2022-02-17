import React from 'react';
import type {Node} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';

const Profile: () => Node = props => (
  <View style={styles.container}>
    <TouchableOpacity
      onPress={props.clickHandler}
      onLongPress={props.longPressHandler}>
      {!props.storyViewed && !props.storyAdded && props.init && (
        <Image source={props.image} style={styles.imgStyle} />
      )}
      {!props.storyViewed && !props.storyAdded && !props.init && (
        <Image source={props.image} style={styles.imgStyle} />
      )}
      {!props.storyViewed && props.storyAdded && props.init && (
        <Image source={props.image} style={styles.imgStyle2} />
      )}
      {!props.storyViewed && props.storyAdded && !props.init && (
        <Image source={props.image} style={styles.imgStyle2} />
      )}
      {props.storyViewed && props.storyAdded && props.init && (
        <Image source={props.image} style={styles.imgStyle3} />
      )}
      {props.storyViewed && props.storyAdded && !props.init && (
        <Image source={props.image} style={styles.imgStyle3} />
      )}

    </TouchableOpacity>
    <Text style={styles.nameFont}>{props.name}</Text>
    <Text style={styles.bioFont}>{props.profession}</Text>
    <Text style={styles.bioFont}>{props.website}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgStyle: {
    width: 350,
    height: 350,
    borderRadius: 350 / 2,
    borderColor: '#fdbb21',
    borderWidth: 8,
    marginBottom: 30,
    marginTop: 20,
  },
  imgStyle2: {
    width: 350,
    height: 350,
    borderRadius: 350 / 2,
    borderColor: 'black',
    borderWidth: 8,
    marginBottom: 30,
    marginTop: 20,
  },
  imgStyle3: {
    width: 350,
    height: 350,
    borderRadius: 350 / 2,
    borderColor: 'gray',
    borderWidth: 8,
    marginBottom: 30,
    marginTop: 20,
  },
  nameFont: {
    color: '#898989',
    letterSpacing: 5,
    fontSize: 20,
    fontWeight: 'bold',
  },
  bioFont: {
    color: '#898989',
    letterSpacing: 3,
    fontSize: 12,
  },
});

export default Profile;
