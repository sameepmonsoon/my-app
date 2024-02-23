import { View, Text, Animated } from "react-native";
import React from "react";
import tw from "twrnc";

const OnBoardingBackDrop = ({ scrollX, currentIndex, width }) => {
  const bgs = ["#DDBEFE", "#B98EFF", "#A5BBFF", "#a5ffc0"];
  const newOne = Animated.modulo(
    Animated.divide(Animated.modulo(scrollX, width), new Animated.Value(width)),
    1
  );

  const bgColor = newOne.interpolate({
    inputRange: [1, 1],
    outputRange: [bgs[currentIndex + 1], bgs[currentIndex]],
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
