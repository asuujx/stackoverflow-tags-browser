import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "./components/Darkmode/ThemeProvider.tsx";
import "./index.css";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
   <React.StrictMode>
      <QueryClientProvider client={queryClient}>
         <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <App />
         </ThemeProvider>
      </QueryClientProvider>
   </React.StrictMode>
);
