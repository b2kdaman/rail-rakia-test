import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux'
import { PrimeReactProvider } from "primereact/api";

import './index.css';

import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';

import { store } from './store'

import { LoginForm } from "./LoginForm";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <PrimeReactProvider value={{ unstyled: false }}>
        <LoginForm />
      </PrimeReactProvider>
    </Provider>
  </React.StrictMode>
);
