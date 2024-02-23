import AuthStack from "./src/navigation/AuthStack.tsx";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { PaperProvider } from "react-native-paper";
const queryClient = new QueryClient();
import { NavigationContainer } from "@react-navigation/native";
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PaperProvider>
        <NavigationContainer>
          <AuthStack />
        </NavigationContainer>
      </PaperProvider>
    </QueryClientProvider>
  );
}
