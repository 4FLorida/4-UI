import styled, { css } from 'styled-components';

const Container = styled.div`
  width: 100%
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  background-color:#f8f9fa;

  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }

  ${props =>
    props.fluid &&
    css`
      width: 100% !important;
    `}
`;

export default Container;
