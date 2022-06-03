import { useForm } from "react-hook-form";
import { Alert, ThemeProvider } from "@mui/material";
import { StyledButton, theme } from "assets/styles/globals";
import ModalWindow from "components/layout/ModalWindow";
import { IRegisterData } from "types/Api";
import { useAppDispatch, useAppSelector } from "hooks/redux";
import { registerUser } from "store/users/user.actions";
import { ErrorList, StyledForm, StyledTextField } from "./style";

interface RegisterProps {
  setOpenModal: (open: boolean) => void;
  openModal: boolean;
}

const Register: React.FC<RegisterProps> = ({ openModal, setOpenModal }) => {
  const dispatch = useAppDispatch();

  const { user, isLoading } = useAppSelector((state) => state.userReducer);

  const { error } = useAppSelector((state) => state.errorRegisterReducer);

  const onSubmit: any = (registerData: IRegisterData) => {
    dispatch(registerUser(registerData));
  };

  const { register, handleSubmit } = useForm();

  return (
    <>
      {!user ? (
        <ModalWindow openModal={openModal} setOpenModal={setOpenModal}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <StyledForm>
              <div>
                <h2>Register</h2>
              </div>
              <ThemeProvider theme={theme}>
                <div>
                  <StyledTextField
                    {...register("username")}
                    id="demo-helper-text-misaligned-no-helper"
                    label="Username"
                    color="primary"
                  />
                </div>
                <div>
                  <StyledTextField
                    {...register("email")}
                    id="demo-helper-text-misaligned-no-helper"
                    label="Email"
                    color="primary"
                  />
                </div>
                <div>
                  <StyledTextField
                    {...register("password")}
                    id="demo-helper-text-misaligned-no-helper"
                    label="Password"
                    color="primary"
                  />
                </div>
              </ThemeProvider>
              {error && (
                <Alert severity="error">
                  {error.map((err) => (
                    <ErrorList>
                      <li>{err}</li>
                    </ErrorList>
                  ))}
                </Alert>
              )}
              <StyledButton
                disabled={isLoading}
                bg="var(--transparent-default)"
              >
                Sign up
              </StyledButton>
            </StyledForm>
          </form>
        </ModalWindow>
      ) : null}
    </>
  );
};

export default Register;
