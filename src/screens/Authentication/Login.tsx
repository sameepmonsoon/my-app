import { View, Button, Text } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
const Login = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Home</Text>
      {/* <Button title="Home" onPress={() => navigation.navigate("Home")} /> */}
    </View>
  );
};

export default Login;
