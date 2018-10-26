import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowingText: true,
    };
    setInterval(() => {
      this.setState(prevState => {
        return {
          isShowingText: !prevState.isShowingText,
        };
      });
    }, 1000);
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