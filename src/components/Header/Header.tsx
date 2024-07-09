import React from 'react';
import { View, TouchableOpacity, Text, ViewStyle } from 'react-native';
import { styles } from './Header.styles';

type HeaderButton = {
  child: JSX.Element;
  onPress?: () => void;
};

type Props = {
  leftButton?: HeaderButton;
  rightButton?: HeaderButton;
  title?: string;
  containerStyle?: ViewStyle;
};

export const Header = (props: Props) => {
  const { leftButton, rightButton, title, containerStyle } = props;

  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.leftContainer}>
        {leftButton ? (
          <TouchableOpacity onPress={leftButton.onPress}>
            {leftButton.child}
          </TouchableOpacity>
        ) : (
          <View />
        )}
      </View>
      <View style={styles.middleContainer}>
        {title && <Text style={styles.title}>{title}</Text>}
      </View>
      <View style={styles.rightContainer}>
        {rightButton ? (
          <TouchableOpacity onPress={rightButton.onPress}>
            {rightButton.child}
          </TouchableOpacity>
        ) : (
          <View />
        )}
      </View>
    </View>
  );
};
