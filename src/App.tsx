import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./redux/redux-store";
import MainPage from "./pages/page";
function App() {
  return (
    <Provider store={store}>
      <MainPage />
    </Provider>
  );
}

export default App;
