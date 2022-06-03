import { createTheme } from "@mui/material";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#ffd8a5",
    },
    secondary: {
      main: "#964B00",
    },
  },
});

export const Link = styled(NavLink)`
  text-decoration: none;
  color: black;
  &.active {
    > div {
      background-color: var(--transparent-active);
      &:hover {
        background-color: var(--transparent-hover);
      }
      &:active {
        background-color: var(--transparent-click);
      }
    }
  }
  > div {
    display: flex;
    padding: 0.25rem 0.8rem 0.3rem 0.8rem;
    border-radius: 4px;
    &:hover {
      background-color: var(--transparent-active);
      transition: all 250ms;
    }
    &:active {
      background-color: var(--transparent-click);
    }
  }
`;

export const Images = styled.img<{ hht: string; wth: string }>`
  height: ${({ hht }) => hht};
  width: ${({ wth }) => wth};
`;

export const StyledButton = styled.button<{ bg?: string }>`
  height: 2.2rem;
  padding: 0 10px 0 10px;
  border: 1px solid var(--color-black);
  border-radius: 4px;
  background-color: ${({ bg = "var(--transparent-active)" }) => bg};
  cursor: pointer;
  text-transform: uppercase;
  white-space: nowrap;
  font-size: 0.9rem;
  &:hover {
    background-color: var(--transparent-hover);
    transition: 250ms;
  }
  &:active {
    background-color: var(--transparent-click);
  }
  &:disabled {
    border: 1px solid var(--color-dark-gray);
    &:hover {
      background-color: var(--transparent-default);
    }
  }
`;
