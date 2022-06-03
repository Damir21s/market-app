import styled from "styled-components";

export const CartContainer = styled.div`
  width: 27rem;
  height: 9rem;
  margin: 15px 0 0 15px;
  padding-top: 2px;
  background-color: var(--color-white);
  > div {
    margin: 15px 15px;
    display: flex;
    img {
      overflow: hidden;
    }
    > div {
      width: 100%;
      margin-left: 1rem;
      display: flex;
    }
  }
`;
export const ButtonsContainer = styled.div`
  margin-left: auto;
  text-align: right;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
