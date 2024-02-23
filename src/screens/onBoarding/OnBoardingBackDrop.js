import { View, Text, Animated } from "react-native";
import React from "react";
import tw from "twrnc";
import { BG_COLOR } from "../../constants/screens/OnBoardingConstants";

const OnBoardingBackDrop = ({ scrollX, currentIndex, width }) => {
  const animatedBackDrop = Animated.modulo(
    Animated.divide(Animated.modulo(scrollX, width), new Animated.Value(width)),
    1
  );

  const bgColor = animatedBackDrop.interpolate({
    inputRange: [1, 1],
    outputRange: [BG_COLOR[currentIndex + 1], BG_COLOR[currentIndex]],
  });
  return (
    <Animated.View
      style={[
        tw`flex-1 absolute z-0 h-full w-full`,
        { backgroundColor: bgColor },
      ]}
    />
  );
};

export default OnBoardingBackDrop;
