import { Backdrop, CircularProgress } from "@mui/material";
import { FormattedMessage } from "react-intl";

interface PreloaderProps {
  isLoading: boolean;
  error: string;
  children: React.ReactNode;
}

const Preloader: React.FC<PreloaderProps> = ({
  isLoading,
  error,
  children,
}) => {
  return (
    <>
      <Backdrop
        sx={{
          color: "var(--color-white)",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
        open={isLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      {error ? (
        <h2>
          <FormattedMessage id="error" />
        </h2>
      ) : (
        children
      )}
    </>
  );
};

export default Preloader;
