import React from 'react'
import ReactDOM from 'react-dom/client.js'
import App from './App.jsx'
import './index.css'
import { Toaster } from './components/ui/sonner.jsx'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import { Theme } from "@radix-ui/themes";
import { ThemeProvider } from "next-themes";

const persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <Theme appearance="light">
        <App />
      </Theme>
        <Toaster />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)
