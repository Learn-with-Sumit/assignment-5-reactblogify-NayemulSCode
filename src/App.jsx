import { Route, Routes } from "react-router-dom"
import SearchModal from "./components/SearchModal"
import Footer from "./components/common/Footer"
import Header from "./components/common/Header"
import Modal from "./components/common/Modal"
import useModal from "./hooks/useModal"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import NotFoundPage from "./pages/NotFoundPage"
import RegistrationPage from "./pages/RegistrationPage"

function App() {
  const { isOpen, closeModal } = useModal()
  return (
    <>
      <Header />
      <Routes>
        <Route element={<HomePage />} path="/" exact />
        <Route element={<RegistrationPage />} path="/register" />
        <Route element={<LoginPage />} path="/login" />
        <Route element={<NotFoundPage />} path="*" />
      </Routes>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <SearchModal />
      </Modal>
      <Footer />
    </>
  )
}

export default App
