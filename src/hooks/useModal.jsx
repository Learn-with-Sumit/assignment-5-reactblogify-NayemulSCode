import { useModalContext } from "../providers/ModalProvider"

const useModal = () => {
  const { isOpen, openModal, closeModal } = useModalContext()

  return {
    isOpen,
    openModal,
    closeModal,
  }
}

export default useModal
