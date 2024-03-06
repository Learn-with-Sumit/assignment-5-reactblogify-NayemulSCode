import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter as Router } from "react-router-dom"

import App from "./App.jsx"
import "./index.css"
import ModalProvider from "./providers/ModalProvider.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ModalProvider>
      <Router>
        <App />
      </Router>
    </ModalProvider>
  </React.StrictMode>
)
