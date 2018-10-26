import React, { Component } from 'react';
import {
  View,
} from 'react-native';

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowingText: true,
    };
  }

  render() {
    const { isShowingText } = this.state;
    const { text } = this.props;
    let display = isShowingText ? text : '';
    return (
      <Text>
        {display}
      </Text>
    );
  }
}

export default Blink;