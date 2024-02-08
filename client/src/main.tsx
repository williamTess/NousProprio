import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { persistore, store } from "./redux/store.ts";
import { PersistGate } from "redux-persist/integration/react";
import { ThemeProvider } from "@mui/material";
import theme from "./style/themeMUI.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <PersistGate persistor={persistore} loading={null}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </PersistGate>
  </Provider>
);
