import styled, { css } from '../../node_modules/styled-components';

const Row = styled.div`
  position: relative;
  min-width: 100%;


  @media (min-width: 480px) {
    width: auto;
  }
  @media (min-width: 576px) {
    width: 540px;
    display:flex;
  }
  @media (min-width: 768px) {
    width: 720px;
    display:flex;
  }
  @media (min-width: 992px) {
    display:flex;
    width: 960px;
  }
  @media (min-width: 1200px) {
    width: 1140px;
    display:flex;
  }

  

  // * Props *

  ${props =>
    props.center &&
    css`
      text-align: center;
      display: block;
    `}
`;

export default Row;
