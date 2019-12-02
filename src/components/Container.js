import styled, { css } from 'styled-components';

const Container = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  text-align:center;

  @media (min-width: 480px) {
    width: auto;
  }
  @media (min-width: 576px) {
    width: 540px;
  }
  @media (min-width: 768px) {
    width: 720px;
  }
  @media (min-width: 992px) {
    width: 960px;
  }
  @media (min-width: 1200px) {
    width: 1140px;
  }

  ${props =>
    props.fluid &&
    css`
      box-sizing: border-box;
      width: 100% !important;
    `}
`;

export default Container;
