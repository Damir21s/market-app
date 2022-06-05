import { useForm } from "react-hook-form";
import { Alert, ThemeProvider } from "@mui/material";
import { StyledButton, theme } from "assets/styles/globals";
import ModalWindow from "components/layout/ModalWindow";
import { useAppDispatch, useAppSelector } from "hooks/redux";
import { ILoginData } from "types/Api";
import { loginUser } from "store/users/user.actions";
import { StyledForm, StyledTextField } from "../Register/style";
import { FormattedMessage } from "react-intl";
import { useContext } from "react";
import { LanguageContext } from "App";
import { onChangeLanguageError } from "utils/onChangeLanguage";

interface LoginProps {
  setOpenModal: (open: boolean) => void;
  openModal: boolean;
}

const Login: React.FC<LoginProps> = ({ openModal, setOpenModal }) => {
  const dispatch = useAppDispatch();

  const { currentLanguage } = useContext(LanguageContext);

  const { user, isLoading } = useAppSelector((state) => state.userReducer);

  const { error } = useAppSelector((state) => state.errorLoginReducer);

  const { errorIntlLogin } = onChangeLanguageError(error, currentLanguage);

  const onSubmit: any = (loginData: ILoginData) => {
    dispatch(loginUser(loginData));
  };

  const { register, handleSubmit } = useForm();

  return (
    <>
      {!user ? (
        <ModalWindow openModal={openModal} setOpenModal={setOpenModal}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <StyledForm>
              <div>
                <h2>
                  <FormattedMessage id="login_title" />
                </h2>
              </div>
              <ThemeProvider theme={theme}>
                <StyledTextField
                  {...register("email")}
                  id="1"
                  label={<FormattedMessage id="label_email" />}
                  color="primary"
                />
                <StyledTextField
                  {...register("password")}
                  id="2"
                  label={<FormattedMessage id="label_password" />}
                  color="primary"
                  type="password"
                  autoComplete="on"
                />
              </ThemeProvider>
              {errorIntlLogin && (
                <Alert severity="error">{errorIntlLogin}</Alert>
              )}
              <StyledButton
                disabled={isLoading}
                bg="var(--transparent-default)"
              >
                <FormattedMessage id="button_sign_in" />
              </StyledButton>
            </StyledForm>
          </form>
        </ModalWindow>
      ) : null}
    </>
  );
};

export default Login;
