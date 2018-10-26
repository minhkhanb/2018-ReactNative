import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';

import Blink from '../../components/Blink';

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