import { View, Text, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Register = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Register</Text>

      <Button onPress={() => navigation.goBack()} title="Go Back)" />
    </View>
  );
};

export default Register;
