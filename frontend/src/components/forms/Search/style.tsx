import { InputBase } from "@mui/material";
import styled from "styled-components";

export const SearchContainer = styled.div`
  position: relative;
  padding: 5px 0px 5px 0px;
  width: 30rem;
  border-radius: var(--radius);
  background-color: rgba(0, 0, 0, 0.08);
  &:hover {
    background-color: rgba(0, 0, 0, 0.17);
    transition: all 250ms;
  }
`;

export const SearchIconWrapper = styled.div`
  position: absolute;
  padding: 5px 0 0 10px;
`;

export const StyledInputBase = styled(InputBase)`
  width: 95%;
  padding-left: 40px;
`;
