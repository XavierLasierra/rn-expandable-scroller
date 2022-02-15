import React from "react";
import { Pressable, StyleProp, TextStyle, ViewStyle } from "react-native";
import FastImage, { Source } from "react-native-fast-image";
import Animated, {
  Extrapolate,
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";

import styles from "./ExpandableItem.style";

export interface ExpandableItemElement {
  imageUrl?: string;
  imageSource?: Source;
  title?: string;
  subtitle?: string;
}

export interface ExpandableItemProps {
  element: ExpandableItemElement;
  position: number;
  yPosition: SharedValue<number>;
  openHeight: number;
  closeHeight: number;
  titleStyle?: StyleProp<TextStyle>;
  subtitleStyle?: StyleProp<TextStyle>;
  textContainerStyle?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
}

const ExpandableItem = ({
  element: { imageUrl, imageSource, title, subtitle },
  position,
  yPosition,
  openHeight,
  closeHeight,
  titleStyle,
  subtitleStyle,
  textContainerStyle,
  containerStyle,
}: ExpandableItemProps) => {
  const animatedContainerStyle = useAnimatedStyle(() => ({
    height: interpolate(
      yPosition.value,
      [(position - 1) * openHeight, position * openHeight],
      [closeHeight, openHeight],
      Extrapolate.CLAMP,
    ),
  }));

  const animatedTextContainerStyle = useAnimatedStyle(() => ({
    height: interpolate(
      yPosition.value,
      [(position - 1) * openHeight, position * openHeight],
      [closeHeight, openHeight * 0.5],
      Extrapolate.CLAMP,
    ),
  }));

  const animatedTitleStyle = useAnimatedStyle(() => ({
    fontSize: interpolate(
      yPosition.value,
      [(position - 1) * openHeight, position * openHeight],
      [25, 50],
      Extrapolate.CLAMP,
    ),
  }));

  const animatedSubtitleStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      yPosition.value,
      [(position - 1) * openHeight, position * openHeight],
      [0, 1],
      Extrapolate.CLAMP,
    ),
  }));

  const renderImage = () => {
    if (imageSource) {
      return <FastImage style={styles.image} source={imageSource} />;
    } else if (imageUrl) {
      return <FastImage style={styles.image} source={{ uri: imageUrl }} />;
    }
  };

  return (
    <Pressable>
      <Animated.View style={[containerStyle, animatedContainerStyle]}>
        {renderImage()}
        <Animated.View
          style={[
            styles.textContainer,
            textContainerStyle,
            animatedTextContainerStyle,
          ]}>
          <Animated.Text style={[styles.title, titleStyle, animatedTitleStyle]}>
            {title}
          </Animated.Text>
          <Animated.Text
            style={[styles.subtitle, subtitleStyle, animatedSubtitleStyle]}>
            {subtitle}
          </Animated.Text>
        </Animated.View>
      </Animated.View>
    </Pressable>
  );
};

export { ExpandableItem };
