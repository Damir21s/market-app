import { TextField } from "@mui/material";
import styled from "styled-components";

export const StyledTextField = styled(TextField)`
  width: 100%;
`;

export const StyledForm = styled.div`
  margin: 0 auto;
  width: 250px;
  > div {
    margin-bottom: 1rem;
  }
`;

export const ErrorList = styled.ul`
  li {
    list-style-type: none;
    margin-bottom: 5px;
  }
`;
