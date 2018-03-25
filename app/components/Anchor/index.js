import React, { PureComponent } from 'react';
import { TouchableOpacity } from 'react-native';

class Anchor extends PureComponent {
  _onPressAnchor = () => {
    this.props.onPress(this.props.id);
  }

  render() {
    return (
      <TouchableOpacity
        onPress={this._onPressAnchor}
      >
        {this.props.children}
      </TouchableOpacity>
    )
  }
}

export default Anchor;
