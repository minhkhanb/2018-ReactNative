import React, { Component } from 'react';
import {
  View,
} from 'react-native';

class BlinkText extends Component {
  render() {
    return (
      <View>
        <Blink text='Text toggle show' />
      </View>
    )
  }
}

export default BlinkText;