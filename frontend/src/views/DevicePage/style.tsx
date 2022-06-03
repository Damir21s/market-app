import styled from "styled-components";

export const ProductContainer = styled.div`
  max-width: 1200px;
  margin: 40px auto 40px auto;
  background-color: var(--color-white);
  border-radius: var(--radius);
`;

export const ProductWrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 10px 0 55px 0;
  h1 {
    width: 20rem;
    margin: 0 0 10px 15px;
  }
`;
export const StyledButtonContainer = styled.div`
  width: 250px;
  margin-left: auto;
  div {
    display: flex;
    h2 {
      margin-right: 1rem;
    }
  }
`;

export const CharactericticsContainer = styled.div`
  display: flex;
  div {
    display: flex;
  }
  ul li {
    width: 13rem;
    list-style: none;
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
    border-bottom: 2px solid var(--color-borwn);
    white-space: nowrap;
  }
`;

export const StyledDescription = styled.div`
  margin-top: 20px;
`;
