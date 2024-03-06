import { useContext, useState } from "react"
import { ModalContext } from "../context"

export const useModalContext = () => useContext(ModalContext)

const ModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <ModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  )
}

export default ModalProvider
