import React from 'react';
import {Text, View, Button} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
function Login({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>Home Screen</Text>
      <Icon name="home" size={30} color="#000" />

      <Button
        title="Go to Details"
        onPress={() =>
          navigation.navigate('Details', {
            itemId: 86,
            otherParam: 'anything you want here',
          })
        }
      />
    </View>
  );
}

export default Login;
