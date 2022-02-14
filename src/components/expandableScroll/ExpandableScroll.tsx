import React, { useState } from "react";
import { LayoutChangeEvent, ScrollViewProps } from "react-native";
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
}

const ExpandableScroll = ({ elements, ...rest }: ExpandableScrollProps) => {
  const yPosition = useSharedValue(0);
  const [height, setHeight] = useState(0);
  const openHeight = Math.round(height / 2);
  const closeHeight = Math.round(height / 8);

  const onLayout = (event: LayoutChangeEvent) => {
    setHeight(event.nativeEvent.layout.height);
  };

  const onScroll = useAnimatedScrollHandler({
    onScroll: ({ contentOffset }) => {
      yPosition.value = contentOffset.y;
    },
  });

  const containerStyle = {
    height: (elements.length + 1) * openHeight,
  };

  return (
    <Animated.ScrollView
      style={styles.container}
      contentContainerStyle={containerStyle}
      onLayout={onLayout}
      onScroll={onScroll}
      scrollEventThrottle={16}
      snapToInterval={openHeight}
      decelerationRate="fast"
      {...rest}>
      {elements.map((props, index) => (
        <ExpandableItem
          key={`element-${index}`}
          yPosition={yPosition}
          position={index}
          openHeight={openHeight}
          closeHeight={closeHeight}
          {...props}
        />
      ))}
    </Animated.ScrollView>
  );
};

export { ExpandableScroll };
