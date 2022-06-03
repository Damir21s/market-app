import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { style } from "./style";

interface LoginWindowProps {
  setOpenModal: (open: boolean) => void;
  openModal: boolean;
  children: React.ReactNode;
}

const ModalWindow: React.FC<LoginWindowProps> = ({
  children,
  setOpenModal,
  openModal,
}) => {
  return (
    <Modal
      open={openModal}
      onClose={() => setOpenModal(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>{children}</Box>
    </Modal>
  );
};

export default ModalWindow;
