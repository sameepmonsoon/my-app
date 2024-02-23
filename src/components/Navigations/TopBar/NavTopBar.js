import { View, Text } from "react-native";
import React from "react";
import tw from "twrnc";
import { IconButton } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
const NavTopBar = ({ title, icon, subtext }) => {
  const navigation = useNavigation();
  return (
    <View
      style={tw`flex flex-1 max-h-10  items-center flex-row p-0 justify-between bg-white w-full gap-2`}
    >
      <View
        style={tw`flex-row justify-start h-full items-center  p-0 flex-1 gap-[0px]`}
      >
        <IconButton
          icon="chevron-left"
          style={tw`absolute -left-1 w-8 h-8`}
          size={22}
          onPress={() => navigation.goBack()}
        />
        {title && (
          <Text style={tw`relative left-9 font-bold text-[12px]`}>{title}</Text>
        )}
      </View>

      <View style={tw`flex-row justify-start h-full items-center p-0 flex-2 `}>
        {(icon || subtext) && (
          <>
            <Text>NavTopBar</Text>
            <Text>NavTopBar</Text>
          </>
        )}
      </View>
    </View>
  );
};

export default NavTopBar;
