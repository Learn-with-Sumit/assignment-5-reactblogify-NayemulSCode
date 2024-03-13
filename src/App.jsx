import { Route, Routes } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import SearchModal from "./components/SearchModal"
import Footer from "./components/common/Footer"
import Header from "./components/common/Header"
import Modal from "./components/common/Modal"
import useModal from "./hooks/useModal"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import NotFoundPage from "./pages/NotFoundPage"
import ProfilePage from "./pages/ProfilePage"
import RegistrationPage from "./pages/RegistrationPage"
import PrivateRoutes from "./routes/PrivateRoutes"

function App() {
  const { isOpen, closeModal } = useModal()
  return (
    <>
      <Header />
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route element={<HomePage />} path="/" exact />
          <Route element={<ProfilePage />} path="/me" />
        </Route>
        <Route element={<RegistrationPage />} path="/register" />
        <Route element={<LoginPage />} path="/login" />
        <Route element={<NotFoundPage />} path="*" />
      </Routes>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <SearchModal />
      </Modal>
      <ToastContainer />
      <Footer />
    </>
  )
}

export default App
