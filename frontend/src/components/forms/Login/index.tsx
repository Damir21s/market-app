import { useForm } from "react-hook-form";
import { Alert, ThemeProvider } from "@mui/material";
import { StyledButton, theme } from "assets/styles/globals";
import ModalWindow from "components/layout/ModalWindow";
import { useAppDispatch, useAppSelector } from "hooks/redux";
import { ILoginData } from "types/Api";
import { loginUser } from "store/users/user.actions";
import { StyledForm, StyledTextField } from "../Register/style";

interface LoginProps {
  setOpenModal: (open: boolean) => void;
  openModal: boolean;
}

const Login: React.FC<LoginProps> = ({ openModal, setOpenModal }) => {
  const dispatch = useAppDispatch();

  const { user, isLoading } = useAppSelector((state) => state.userReducer);

  const { error } = useAppSelector((state) => state.errorLoginReducer);

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
                <h2>Login</h2>
              </div>
              <ThemeProvider theme={theme}>
                <StyledTextField
                  {...register("email")}
                  id="demo-helper-text-misaligned-no-helper"
                  label="Email"
                  color="primary"
                />
                <StyledTextField
                  {...register("password")}
                  id="demo-helper-text-misaligned-no-helper"
                  label="Password"
                  color="primary"
                />
              </ThemeProvider>
              {error && <Alert severity="error">{error}</Alert>}
              <StyledButton
                disabled={isLoading}
                bg="var(--transparent-default)"
              >
                Sign in
              </StyledButton>
            </StyledForm>
          </form>
        </ModalWindow>
      ) : null}
    </>
  );
};

export default Login;
