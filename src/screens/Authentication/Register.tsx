import { View, Text, Button, TextInput, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { IconButton } from "react-native-paper";
import tw from "twrnc";
import NavTopBar from "../../components/Navigations/TopBar/NavTopBar";
import CustomButton from "../../components/CustomButton/CustomButton";
import CustomIconButton from "../../components/CustomButton/CustomIconButton";

const Register = () => {
  const navigation = useNavigation();
  const [text, setText] = React.useState("");
  return (
    <View style={tw`flex-1 gap-4 bg-white items-center`}>
      {/* <NavTopBar title="Login" icon="none" subtext="sub" /> */}
      <CustomIconButton
      // 
        customStyle={tw`relative top-3 left-0 w-full flex-row h-20 justify-start items-center gap-[2px] p-2`}
      // >
        // <IconButton
          iconName="chevron-left"
          iconStyle={tw` w-12 rounded-full h-12 bg-[#3eec3e]`}
        //   iconColor="white"
        //   size={35}
          onPress={() => navigation.goBack()}
        />
    
      <View
        style={tw`h-10 left-12 w-full relative  min-h-10 justify-start items-start gap-[2px]`}
      >
        <Text style={tw` text-3xl font-bold px-4 w-full items-center`}>
          Sign In
        </Text>
      </View>
      <View style={tw`h-50 w-full`}>
        <Image
          style={{ height: "100%", width: "100%", objectFit: "contain" }}
          source={require("../../../assets/login.jpg")}
        />
      </View>
      <View style={tw`p-2  w-[80%] justify-start gap-10 h-[50%]`}>
        <View style={tw` justify-start gap-5`}>
          <View style={tw` flex-row w-full relative p-0 h-10`}>
            <IconButton
              icon="face-man"
              style={tw`absolute  -top-[8px] -left-[16px] `}
              iconColor="#d6d4d4"
              size={25}
              onPress={() => navigation.goBack()}
            />
            <TextInput
              placeholder="User Name"
              style={tw`border-b-[1px] border-gray-200 pl-8 w-full h-full`}
              // onChangeText={(text) => setText(text)}
              value={text}
            />
          </View>
          <View style={tw` flex-row w-full relative p-0 h-10`}>
            <IconButton
              icon="lock-outline"
              style={tw`absolute  -top-[8px] -left-[16px] z-1 rounded-full`}
              iconColor="#d6d4d4"
              size={25}
              onPress={() => navigation.goBack()}
            />
            <TextInput
              placeholder="Password"
              style={tw`border-b-[1px] border-gray-200 pl-8 w-full h-full`}
              // onChangeText={(text) => setText(text)}
              value={text}
            />
          </View>
        </View>
        <CustomButton
          label="Login"
          customStyle={tw`bg-[#3eec3e] h-15 w-full`}
        />
      </View>
    </View>
  );
};

export default Register;
