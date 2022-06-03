import styled from "styled-components";

export const СartContainer = styled.div`
  width: 480px;
  height: 60vh;
  padding-top: 0.5rem;
  border: 1px solid black;
  border-radius: 6px;
  overflow: auto;
  background-color: var(--color-gray);
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  padding-bottom: 20px;
  div div {
    margin-top: 10px;
  }
`;
