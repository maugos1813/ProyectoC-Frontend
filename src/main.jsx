/* import ReactDOM from "react-dom"; */
import "./index.css";
/* import { StrictMode } from "react"; */
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ExamProvider } from "./context/ExamContext-.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "./context/AuthContext.jsx";
import { AuthProvider as AlumnsAuthProvider } from "./context/AlumnsContext.jsx";
import { CreateEProvider } from "./context/CreateEContextM.jsx";
const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <AuthProvider>
        <AlumnsAuthProvider>
          <ExamProvider>
          <CreateEProvider>
            
              <App />
          
          </CreateEProvider>
          </ExamProvider>
        </AlumnsAuthProvider>
      </AuthProvider>
    </BrowserRouter>
  </QueryClientProvider>
  // </StrictMode>,
);

