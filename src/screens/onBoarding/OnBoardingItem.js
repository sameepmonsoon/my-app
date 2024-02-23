import React from "react";
import { View, Text, Image, useWindowDimensions } from "react-native";
import tw from "twrnc";

const OnBoardingItem = ({ item }) => {
  const { width, height } = useWindowDimensions();
  const screenWidth = width - 10;
  return (
    <View
      style={tw`flex justify-center items-center w-[${screenWidth}px] flex-1 p-0`}
    >
      <Image
        source={item.image}
        style={tw`w-[100%] flex-1 max-h-[75%] object-fill`}
      />
      <View
        style={tw`flex justify-between items-center w-full flex-column p-2`}
      >
        <Text style={tw`text-[22px] font-bold text-center text-white mt-5`}>
          {item.title}
        </Text>
        <Text style={tw`text-[13px] max-w-[70%] text-center text-white mt-2`}>
          {item.subtitle}
        </Text>
      </View>
    </View>
  );
};

export default OnBoardingItem;
