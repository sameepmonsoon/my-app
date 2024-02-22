import React from "react";
import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
const OnBoarding = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>onBoarding</Text>
      <Button title="Login" onPress={() => navigation.navigate("Login")} />
    </View>
  );
};

export default OnBoarding;
