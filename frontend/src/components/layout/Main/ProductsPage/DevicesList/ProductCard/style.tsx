import styled from "styled-components";

export const StyledCard = styled.div`
  min-width: 500px;
  height: 12rem;
  display: flex;
  margin-bottom: 16px;
  background-color: var(--color-white);
  border-radius: var(--radius);
  img {
    margin: 16px 16px;
  }
  > div {
    margin-top: 16px;
    div div {
      margin-left: 5px;
    }
    Button {
      margin: 71px 0 0 5px;
    }
  }
`;
