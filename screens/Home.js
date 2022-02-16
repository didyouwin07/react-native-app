import React from 'react';
import type {Node} from 'react';
import {SafeAreaView, Text, View, StyleSheet} from 'react-native';
import Header from '../components/header';
import Profile from '../components/profile';
import Footer from '../components/footer';

const Home: () => Node = ({navigation}) => {
  const clickHandler = () => {
    navigation.navigate('Story');
  };
  const longPressHandler = () => {
      navigation.navigate('Profile Pic');
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainBody}>
        <Header />
        <Profile
          clickHandler={clickHandler}
          longPressHandler={longPressHandler}
          name="Vishwas"
          profession="Software Engineer"
          website="www.test.com"
        />
      </View>
      {/* <View style={styles.footer}> */}
      <Footer />
      {/* </View> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  mainBody: {
    flex: 7,
  },
  footer: {
    // flex: 1,
  },
});

export default Home;
