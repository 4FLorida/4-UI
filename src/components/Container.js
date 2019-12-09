import styled, { css } from '../../node_modules/styled-components';


const Container = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  position: relative;
  display: block;

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

  // * Props *

  ${props =>
    props.fluid &&
    css`
      box-sizing: border-box;
      min-width: 100%;
    `}

  ${props =>
    props.center &&
    css`
      text-align: center;
    `}
`;

export default Container;
