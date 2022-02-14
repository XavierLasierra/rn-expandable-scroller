import React from "react";
import { Pressable } from "react-native";
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

export type ExpandableItemProps = ExpandableItemElement & {
  position: number;
  yPosition: SharedValue<number>;
  openHeight: number;
  closeHeight: number;
};

const ExpandableItem = ({
  imageUrl,
  imageSource,
  title,
  subtitle,
  position,
  yPosition,
  openHeight,
  closeHeight,
}: ExpandableItemProps) => {
  const containerStyle = useAnimatedStyle(() => ({
    height: interpolate(
      yPosition.value,
      [(position - 1) * openHeight, position * openHeight],
      [closeHeight, openHeight],
      Extrapolate.CLAMP,
    ),
  }));

  const textContainerStyle = useAnimatedStyle(() => ({
    height: interpolate(
      yPosition.value,
      [(position - 1) * openHeight, position * openHeight],
      [closeHeight, openHeight * 0.5],
      Extrapolate.CLAMP,
    ),
  }));

  const titleStyle = useAnimatedStyle(() => ({
    fontSize: interpolate(
      yPosition.value,
      [(position - 1) * openHeight, position * openHeight],
      [25, 50],
      Extrapolate.CLAMP,
    ),
  }));

  const subtitleStyle = useAnimatedStyle(() => ({
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
      <Animated.View style={[styles.container, containerStyle]}>
        {renderImage()}
        <Animated.View style={[styles.textContainer, textContainerStyle]}>
          <Animated.Text style={[styles.title, titleStyle]}>
            {title?.toUpperCase()}
          </Animated.Text>
          <Animated.Text style={[styles.subtitle, subtitleStyle]}>
            {subtitle}
          </Animated.Text>
        </Animated.View>
      </Animated.View>
    </Pressable>
  );
};

export { ExpandableItem };
