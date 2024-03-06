import ReactDOM from "react-dom"
const Modal = ({ children, isOpen, onClose }) => {
  if (!isOpen) return null

  return ReactDOM.createPortal(
    <section className="absolute left-0 top-0 w-full h-full grid place-items-center bg-slate-800/50 backdrop-blur-sm z-50">
      {children}
    </section>,
    document.getElementById("modal-root")
  )
}
export default Modal
