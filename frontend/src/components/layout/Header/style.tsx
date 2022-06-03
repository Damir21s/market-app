import styled from "styled-components";

export const HeaderContainer = styled.div`
  background-color: var(--color-beige);
  filter: drop-shadow(2px 0px 10px rgba(0, 0, 0, 0.3));
`;

export const HeaderWrapper = styled.div`
  padding: 20px 70px;
  margin: 0 auto;
  max-width: 1440px;
`;

export const List = styled.ul`
  display: flex;
  li {
    margin-right: 2rem;
    cursor: pointer;
    font-weight: 600;
    a div {
      text-transform: uppercase;
    }
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  margin-right: 3rem;
  h3 {
    line-height: 1.3rem;
    margin-left: 0.4rem;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    a {
      text-decoration: none;
      color: var(--color-black);
    }
    div button {
      margin-right: 15px;
    }
  }
`;
