import Modal from "react-modal";

export default function CustomModal({ children, showModal, setShowModal }) {
  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0,0,0,0.5)",
      zIndex: "100000",
    },
    content: {
      width: "90%",
      margin: "auto",
      backgroundColor: "white",
      borderRadius: "5px",
      maxWidth: "1100px",
      border: "1px solid rgba(231, 231, 231, 1)",
      padding: "20px",
      height: "fit-content",
      zIndex: "1000",
    },
  };

  if (!showModal) return null;
  return (
    <>
      <Modal style={customStyles} isOpen={showModal} onRequestClose={() => setShowModal(false)}>
        {children}
      </Modal>
    </>
  );
}
