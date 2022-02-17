import React, {useState} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  Image,
  ScrollView,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';

const Form: () => Node = ({route, navigation}) => {
  const [headline, setHeadline] = useState('');
  const [story, setStory] = useState('');
  const [img, setImage] = useState(require('../assets/my_img.jpg'));
  const [init, setInit] = useState(false);

  const submitHandler = () => {
    // console.log(headline);
    // console.log(story);
    // console.log(img);
    navigation.navigate({
      name: 'Home',
      params: {
        headline: headline,
        story: story,
        storyImg: img,
        storyAdded: true,
      },
      merge: true,
    });
  };

  const imageHandler = () => {
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
        setInit(true);
      }
    });
  };
  return (
    <ScrollView>
      <View>
        <TextInput
          style={styles.textInputStyle}
          placeholder="Enter the headline"
          onChangeText={text => setHeadline(text)}
        />
        <TextInput
          style={styles.textInputStyle}
          placeholder="Enter the story"
          multiline
          onChangeText={text => setStory(text)}
        />
        <View style={styles.container}>
          {init && <Image source={img} style={styles.imageStyle} />}
        </View>
        <View style={styles.buttonStyle}>
          {!init && (
            <Button
              color="#fdbb21"
              title="Select image"
              onPress={imageHandler}
            />
          )}
          {init && (
            <Button
              color="#fdbb21"
              title="Change image"
              onPress={imageHandler}
            />
          )}
        </View>
        <View style={[styles.buttonStyle, {marginTop: 20}]}>
          <Button title="Submit" onPress={submitHandler} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  textInputStyle: {
    marginLeft: 10,
    marginRight: 10,
    marginVertical: 20,
    borderColor: '#fdbb21',
    borderWidth: 1,
  },
  buttonStyle: {
    marginHorizontal: 10,
    marginVertical: 20,
  },
  imageStyle: {
    height: 350,
    width: 350,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Form;
