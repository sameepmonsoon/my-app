import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"; // Correct import statement
import { Provider as PaperProvider } from "react-native-paper";
import AuthStack from "./src/navigation/AuthStack.tsx";

const queryClient = new QueryClient();

export default function App() {
  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <PaperProvider>
          <NavigationContainer>
            <SafeAreaView style={{ flex: 1 }}>
              <AuthStack />
            </SafeAreaView>
          </NavigationContainer>
        </PaperProvider>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
}
