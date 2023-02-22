import ReactDOM from "react-dom/client";
import { ContextProvider } from "./context";

// Css
import "./index.css";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
  <ContextProvider>
    <App />
  </ContextProvider>
  // </React.StrictMode>,
);
