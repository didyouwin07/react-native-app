import React from 'react';
import type {Node} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import ProgressBar from 'react-native-progress/Bar';

const Story: () => Node = ({route, navigation}) => {
  //   console.log(route.params.storyImg);
  setTimeout(() => navigation.pop(), 5000);
  return (
    <View style={styles.container}>
      <ProgressBar
        width={300}
        // progress={0.7}
        indeterminate={true}
        animated={true}
        indeterminateAnimationDuration={5000}
        animationType={'decay'}
      />
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
    marginTop: 100,
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
