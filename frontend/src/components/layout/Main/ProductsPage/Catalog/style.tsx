import styled from "styled-components";

export const CatalogContainer = styled.div`
  padding: 16px 24px 0 32px;
  height: 300px;
  > div {
    margin-top: 10px;
    a div {
      padding-top: 5px;
      div {
        margin-right: 10px;
      }
    }
  }
`;

export const StyledIcon = styled.div`
  margin-right: 10px;
`;
