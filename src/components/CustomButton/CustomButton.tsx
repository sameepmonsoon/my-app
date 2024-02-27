import { View, Text, Pressable, Animated } from "react-native";
import React, { useState } from "react";
import tw, { Style } from "twrnc";

const CustomButton = ({
  label,
  backgroundColor,
  icon,
  disabled,
  customStyle,
}: {
  label: string;
  customStyle: any;
  backgroundColor?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
}) => {
  const [scaleValue] = useState(new Animated.Value(1));

  const handlePressIn = () => {
    Animated.spring(scaleValue, {
      toValue: 0.98,
      speed: 50,
      useNativeDriver: true,
      bounciness: 24,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleValue, {
      toValue: 1,
      speed: 50,
      useNativeDriver: true,
      bounciness: 24,
    }).start();
  };

  return (
    <Pressable
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      disabled={disabled}
    >
      <Animated.View
        style={[
          tw`rounded-[12px] min-h-12 min-w-30 items-center justify-center`,
          {
            transform: [{ scale: scaleValue }],
          },
          customStyle,
        ]}
      >
        <Text style={tw`font-bold text-white text-[20px]`}>{label}</Text>
      </Animated.View>
    </Pressable>
  );
};

export default CustomButton;
