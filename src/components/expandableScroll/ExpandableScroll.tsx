import React, { useState } from "react";
import {
  LayoutChangeEvent,
  ScrollViewProps,
  StyleProp,
  TextStyle,
  ViewStyle,
} from "react-native";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";

import {
  ExpandableItem,
  ExpandableItemElement,
} from "../expandableItem/ExpandableItem";

import styles from "./ExpandableScroll.style";

interface ExpandableScrollProps extends ScrollViewProps {
  elements: ExpandableItemElement[];
  openElementScreenPercentage?: number;
  openElementHeight?: number;
  closedElementScreenPercentage?: number;
  closedElementHeight?: number;
  titleStyle?: StyleProp<TextStyle>;
  subtitleStyle?: StyleProp<TextStyle>;
  textContainerStyle?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
}

const ExpandableScroll = ({
  elements,
  openElementScreenPercentage = 50,
  openElementHeight,
  closedElementScreenPercentage = 12.5,
  closedElementHeight,
  titleStyle,
  subtitleStyle,
  textContainerStyle,
  containerStyle,
  ...rest
}: ExpandableScrollProps) => {
  const yPosition = useSharedValue(0);
  const [height, setHeight] = useState(0);
  const openHeight = Math.round(
    openElementHeight
      ? openElementHeight
      : (height * openElementScreenPercentage) / 100,
  );
  const closeHeight = Math.round(
    closedElementHeight
      ? closedElementHeight
      : (height * closedElementScreenPercentage) / 100,
  );

  const onLayout = (event: LayoutChangeEvent) => {
    setHeight(event.nativeEvent.layout.height);
  };

  const onScroll = useAnimatedScrollHandler({
    onScroll: ({ contentOffset }) => {
      yPosition.value = contentOffset.y;
    },
  });

  const scrollContentStyle = {
    height: (elements.length + 1) * openHeight,
  };

  return (
    <Animated.ScrollView
      style={styles.container}
      contentContainerStyle={scrollContentStyle}
      onLayout={!openElementHeight ? onLayout : undefined}
      onScroll={onScroll}
      scrollEventThrottle={16}
      snapToInterval={openHeight}
      decelerationRate="fast"
      {...rest}>
      {elements.map((element, index) => (
        <ExpandableItem
          key={`element-${index}`}
          yPosition={yPosition}
          position={index}
          openHeight={openHeight}
          closeHeight={closeHeight}
          element={element}
          titleStyle={titleStyle}
          containerStyle={containerStyle}
          subtitleStyle={subtitleStyle}
          textContainerStyle={textContainerStyle}
        />
      ))}
    </Animated.ScrollView>
  );
};

export { ExpandableScroll };
