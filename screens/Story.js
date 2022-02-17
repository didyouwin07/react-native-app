import React from 'react';
import type {Node} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

const Story: () => Node = ({route, navigation}) => {
//   console.log(route.params.storyImg);
  return (
    <View style={styles.container}>
      <Image source={route.params.storyImg} style={styles.imageStyle} />
      <Text style={styles.headlineText}>{route.params.headline}</Text>
      <Text style={styles.storyText}>{route.params.story}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    height: 200,
    width: 200,
    borderRadius: 50,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0D405B',
    flex: 1,
  },
  headlineText: {
    color: 'white',
    fontSize: 27,
    fontStyle: 'italic',
    marginVertical: 20,
  },
  storyText: {
    color: 'white',
    fontSize: 36,
    fontWeight: 'bold',
    marginTop: 50,
  },
});

export default Story;
