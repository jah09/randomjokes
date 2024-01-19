import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { Query, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';
import Card from "../src/components/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
function App() {
  const [count, setCount] = useState(0);
  // const queryClient  = new QueryClient();
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Card />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </div>
  );
}

export default App;
