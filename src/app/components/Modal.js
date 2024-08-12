import { useEffect } from "react";
import Modal from "react-modal";

export default function CustomModal({ children, showModal, setShowModal, style = {} }) {
  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0,0,0,0.5)",
      zIndex: "100000",
    },
    content: {
      margin: "auto",
      backgroundColor: "white",
      borderRadius: "5px",
      maxWidth: "1100px",
      border: "1px solid rgba(231, 231, 231, 1)",
      padding: "20px",
      height: "fit-content",
      maxHeight: "90vh",
      zIndex: "1000",
      ...style,
    },
  };

  useEffect(() => {
    const appElement = document.getElementById("modal-root");
    if (appElement) {
      Modal.setAppElement(appElement);
    } else {
      console.error("No element found for selector #modal-root.");
    }
  }, []);

  if (!showModal) return null;
  return (
    <>
      <Modal style={customStyles} isOpen={showModal} onRequestClose={() => setShowModal(false)}>
        {children}
      </Modal>
    </>
  );
}
