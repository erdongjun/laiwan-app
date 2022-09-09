import React from 'react';
import {
  Text,
  View,
  Button,
  StatusBar,
  ImageBackground,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {SafeAreaView} from 'react-native-safe-area-context';

const {width, height} = Dimensions.get('screen');

function Start({navigation}) {
  return (
    <ImageBackground
      style={styles.image}
      source={{
        uri: 'https://img.js.design/assets/img/626119e152e42d1c698e14c6.png',
      }}>
      <View style={styles.containerBlur}>
        <Text style={styles.text}>来玩</Text>
        <Text style={styles.text}>一起嗨起来！</Text>
        <Button
          title="登录"
          onPress={() =>
            navigation.navigate('login', {
              itemId: 86,
              otherParam: 'anything you want here',
            })
          }
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  containerBlur: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba( 0, 0, 0, 0.8 )',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    width,
    height,
  },
  text: {
    color: '#f1f1f1',
    fontSize: 30,
    textAlign: 'center',
  },
});

export default Start;
