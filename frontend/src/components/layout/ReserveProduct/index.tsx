import ModalWindow from "components/layout/ModalWindow";
import { useAppSelector } from "hooks/redux";
import { StyledContainer } from "./style";

interface ReservationProductProps {
  openModal: boolean;
  setOpenModal: (open: boolean) => void;
}

const ReservationProduct: React.FC<ReservationProductProps> = ({
  setOpenModal,
  openModal,
}) => {
  const { user } = useAppSelector((state) => state.userReducer);

  return (
    <>
      {user ? (
        <ModalWindow setOpenModal={setOpenModal} openModal={openModal}>
          <StyledContainer>
            <h2>Ваш заказ зарезервирован.</h2>
            <h4>В ближайшее время с вами свяжется наш специалист.</h4>
          </StyledContainer>
        </ModalWindow>
      ) : (
        <ModalWindow setOpenModal={setOpenModal} openModal={openModal}>
          <StyledContainer>
            <h2>Войдите или зарегистрируйтесь.</h2>
            <h4>
              Для того чтобы сделать заказ необходимо быть авторизированным.
            </h4>
          </StyledContainer>
        </ModalWindow>
      )}
    </>
  );
};

export default ReservationProduct;
