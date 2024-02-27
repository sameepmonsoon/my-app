import { View, Text, Pressable, Animated } from "react-native";
import React, { useState } from "react";
import tw, { Style } from "twrnc";
import { IconButton } from "react-native-paper";
const CustomIconButton = ({
  iconName,
  disabled,
  customStyle,
  onPress,
  iconStyle,
}: {
  customStyle: any;
  iconStyle: any;
  iconName?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  onPress?: () => any;
}) => {
  const [scaleValue] = useState(new Animated.Value(1));

  const handlePress = () => {
    Animated.spring(scaleValue, {
      toValue: 1,
      speed: 50,
      useNativeDriver: true,
      bounciness: 24,
    }).start();
  };
  return (
    <Pressable onPress={handlePress} disabled={disabled}>
      <Animated.View
        style={[
          tw`z-1 rounded-full items-center justify-center`,
          {
            transform: [{ scale: scaleValue }],
          },
          customStyle,
        ]}
      >
        <IconButton
          icon={iconName}
          style={[tw`absolute -top-[8px] -left-[16px] `, iconStyle]}
          iconColor="#d6d4d4"
          size={25}
          onPress={onPress}
        />
      </Animated.View>
    </Pressable>
  );
};

export default CustomIconButton;
