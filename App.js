import AuthStack from "./src/navigation/AuthStack.tsx";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
const queryClient = new QueryClient();
import { NavigationContainer } from "@react-navigation/native";
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <AuthStack />
      </NavigationContainer>
    </QueryClientProvider>
  );
}
