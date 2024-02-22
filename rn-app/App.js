import AuthStack from "./src/navigation/AuthStack.tsx";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
const queryClient = new QueryClient();
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthStack />
    </QueryClientProvider>
  );
}
