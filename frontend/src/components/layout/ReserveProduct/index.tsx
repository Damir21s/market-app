import { FormattedMessage } from "react-intl";
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
            <h2>
              <FormattedMessage id="alert_reservation_title" />
            </h2>
            <h4>
              <FormattedMessage id="alert_reservation_text" />
            </h4>
          </StyledContainer>
        </ModalWindow>
      ) : (
        <ModalWindow setOpenModal={setOpenModal} openModal={openModal}>
          <StyledContainer>
            <h2>
              <FormattedMessage id="alert_auth_title" />
            </h2>
            <h4>
              <FormattedMessage id="alert_auth_text" />
            </h4>
          </StyledContainer>
        </ModalWindow>
      )}
    </>
  );
};

export default ReservationProduct;
