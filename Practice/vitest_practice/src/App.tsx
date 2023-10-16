import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import ReactQueryButton from "./components/ReactQueryButton";
import "./App.css";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <h1>Practice</h1>
      <ReactQueryButton />
    </QueryClientProvider>
  );
}

export default App;
