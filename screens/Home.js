import React from 'react';
import type {Node} from 'react';
import {SafeAreaView, Text, View, StyleSheet} from 'react-native';
import Header from '../components/header';
import Profile from '../components/profile';
import Footer from '../components/footer';

const Home: () => Node = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainBody}>
        <Header />
        <Profile
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