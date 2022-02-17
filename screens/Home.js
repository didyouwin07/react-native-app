import React, {useState} from 'react';
import type {Node} from 'react';
import {SafeAreaView, Text, View, StyleSheet} from 'react-native';
import Header from '../components/header';
import Profile from '../components/profile';
import Footer from '../components/footer';
import {launchImageLibrary} from 'react-native-image-picker';
import {useQuery, gql} from '@apollo/client';

const getHomePageDetails = gql`
  {
    HomePageDetails(id: 1) {
      name
      profession
    }
  }
`;

const Home: () => Node = ({route, navigation}) => {
  const [counter, setCounter] = useState(false);
  const [headline, setHeadline] = useState('');
  const [story, setStory] = useState('');
  const [storyImg, setStoryImg] = useState('');
  const [viewed, setViewed] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [name, setName] = useState('Fetching...');
  const [profession,setProfession] = useState('Fetching');
  const {loading, data} = useQuery(getHomePageDetails);
  //   if (loading) {
  //     return <Text>Loading...</Text>;
  //   }
  if (loaded === false && data) {
    setLoaded(true);
    setName(data.HomePageDetails.name);
    setProfession(data.HomePageDetails.profession);
    console.log(data.HomePageDetails.name);
  }

  if (counter === true) {
    //     setHeadline(route.params.headline);
    //     setStory(route.params.story);
    //     setStoryImg(route.params.storyImg);
    console.log('Story has been added');
  }

  if (counter === false && route.params) {
    setCounter(true);
  }

  const clickHandler = () => {
    if (counter === false) {
      navigation.navigate('Story');
      if (route.params) {
        setCounter(true);
      }
    } else {
      console.log('Showing story');
      navigation.navigate('News', {
        headline: route.params.headline,
        story: route.params.story,
        storyImg: route.params.storyImg,
      });
      setViewed(true);
    }
  };
  const [img, setImage] = useState(require('../assets/my_img.jpg'));
  const [init, setInit] = useState(true);
  //open gallery function that needs to be invoked on long press
  const longPressHandler = () => {
    const options = {
      storageOptions: {
        path: 'images',
        mediaType: 'photo',
      },
      includeBase64: true,
    };

    launchImageLibrary(options, response => {
      //   console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        // You can also display the image using data:
        const source = {
          uri: 'data:image/jpeg;base64,' + response.assets[0].base64,
        };
        // const source = response.assets[0].base64;
        // console.log('Source of image is->> ', source);
        setImage(source);
        // console.log(img);
        setInit(false);
      }
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainBody}>
        <Header />
        <Profile
          clickHandler={clickHandler}
          longPressHandler={longPressHandler}
          name={name}
          profession={profession}
          website="www.test.com"
          image={img}
          init={init}
          storyAdded={counter} //route.params is needed here but it shouldn't be undefined
          storyViewed={viewed}
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
