import { useForm } from "react-hook-form";
import { Alert, ThemeProvider } from "@mui/material";
import { StyledButton, theme } from "assets/styles/globals";
import ModalWindow from "components/layout/ModalWindow";
import { IRegisterData } from "types/Api";
import { useAppDispatch, useAppSelector } from "hooks/redux";
import { registerUser } from "store/users/user.actions";
import { ErrorList, StyledForm, StyledTextField } from "./style";
import { FormattedMessage } from "react-intl";
import { onChangeLanguageError } from "utils/onChangeLanguage";
import { useContext } from "react";
import { LanguageContext } from "App";

interface RegisterProps {
  setOpenModal: (open: boolean) => void;
  openModal: boolean;
}

const Register: React.FC<RegisterProps> = ({ openModal, setOpenModal }) => {
  const dispatch = useAppDispatch();

  const { currentLanguage } = useContext(LanguageContext);

  const { user, isLoading } = useAppSelector((state) => state.userReducer);

  const { error } = useAppSelector((state) => state.errorRegisterReducer);

  const onSubmit: any = (registerData: IRegisterData) => {
    dispatch(registerUser(registerData));
  };

  const { errorIntlRegister } = onChangeLanguageError(error, currentLanguage);

  const { register, handleSubmit } = useForm();

  return (
    <>
      {!user ? (
        <ModalWindow openModal={openModal} setOpenModal={setOpenModal}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <StyledForm>
              <div>
                <h2>
                  <FormattedMessage id="register_title" />
                </h2>
              </div>
              <ThemeProvider theme={theme}>
                <div>
                  <StyledTextField
                    {...register("username")}
                    id="1"
                    label={<FormattedMessage id="label_name" />}
                    color="primary"
                  />
                </div>
                <div>
                  <StyledTextField
                    {...register("email")}
                    id="2"
                    label={<FormattedMessage id="label_email" />}
                    color="primary"
                  />
                </div>
                <div>
                  <StyledTextField
                    {...register("password")}
                    id="3"
                    label={<FormattedMessage id="label_password" />}
                    color="primary"
                    type="password"
                    autoComplete="on"
                  />
                </div>
              </ThemeProvider>
              {errorIntlRegister.length ? (
                <Alert severity="error">
                  {errorIntlRegister.map((err, i) => (
                    <ErrorList key={i}>
                      <li>{err}</li>
                    </ErrorList>
                  ))}
                </Alert>
              ) : null}
              <StyledButton
                disabled={isLoading}
                bg="var(--transparent-default)"
              >
                <FormattedMessage id="button_sign_up" />
              </StyledButton>
            </StyledForm>
          </form>
        </ModalWindow>
      ) : null}
    </>
  );
};

export default Register;
