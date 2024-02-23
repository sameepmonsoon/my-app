import { View, Text, Button, TextInput } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { IconButton } from "react-native-paper";
import tw from "twrnc";
import NavTopBar from "../../components/Navigations/TopBar/NavTopBar";

const Register = () => {
  const navigation = useNavigation();
  const [text, setText] = React.useState("");
  return (
    <View style={tw`flex-1 gap-2 bg-white`}>
      {/* <NavTopBar title="Login" icon="none" subtext="sub" /> */}
      <View style={tw`h-20 justify-center items-start gap-[2px] p-2`}>
        <IconButton
          icon="chevron-left"
          style={tw` top-3 w-12 rounded-full h-12 bg-[#a5edff]`}
          iconColor="white"
          size={35}
          onPress={() => navigation.goBack()}
        />
      </View>
      <View style={tw`max-h-40  min-h-20 justify-center items-start gap-[2px]`}>
        <Text style={tw` text-3xl font-bold px-4 h-10`}>Sign In </Text>
        {/* <Text style={tw` text-3xl font-bold px-4 h-10`}>your account </Text> */}
      </View>
      <View style={tw`p-2`}>
        <TextInput
          style={tw` bg-red-900`}
          // onChangeText={(text) => setText(text)}
          value={text}
        />
        <Button title="Login" />
      </View>
    </View>
  );
};

export default Register;
