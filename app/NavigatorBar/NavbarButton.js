import React, { Component, PropTypes } from 'react';
import {
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import styles from './styles';

export default class NavbarButton extends Component {
  renderView(data) {
    // const colorStyle = data.tintColor ? {color: data.tintColor,} : null;
    if (data.title) {
      return <Text style={[styles.navBarButtonText, { color: data.tintColor, }, ]}>{data.title}</Text>
    } else {
      // let defaultIcon = item.props.renderIcon();
      // icon = React.cloneElement(defaultIcon, {
      //   style: [defaultIcon.props.style, styles.defaultSelectedIcon],
      // });
      //
      return data.titleView
    }
  }

  render() {
    const { style, tintColor, margin, title, handler, disabled,titleView } = this.props;
    console.log(style)
    return (
      <TouchableOpacity style={styles.navBarButton} onPress={handler} disabled={disabled}>
        <View style={style}>
            {this.renderView(this.props)}
        </View>
      </TouchableOpacity>
    );
  }

  static propTypes = {
    style: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.array,
    ]),
    tintColor: PropTypes.string,
    title: PropTypes.string,
    titleView: PropTypes.any,
    handler: PropTypes.func,
    disabled: PropTypes.bool,
  };

  static defaultProps = {
    style: {},
    title: '',
    tintColor: '#0076FF',
    onPress: () => ({}),
  };
}
