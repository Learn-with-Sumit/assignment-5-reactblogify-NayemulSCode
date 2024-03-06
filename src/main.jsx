import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter as Router } from "react-router-dom"

import App from "./App.jsx"
import "./index.css"
import AuthProvider from "./providers/AuthProvider.jsx"
import ModalProvider from "./providers/ModalProvider.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <ModalProvider>
        <Router>
          <App />
        </Router>
      </ModalProvider>
    </AuthProvider>
  </React.StrictMode>
)
