

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ExamProvider } from "./context/ExamContext-.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "./context/AuthContext.jsx";
const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <AuthProvider>
        <ExamProvider>
          <App />
        </ExamProvider>
      </AuthProvider>
    </BrowserRouter>
  </QueryClientProvider>

  // </StrictMode>,

);
