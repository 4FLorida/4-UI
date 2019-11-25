import styled, { css } from 'styled-components';

const Container = styled.div`
  width: 100%
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 768px) {
    width: 750px;
  }
  @media (min-width: 992px) {
    width: 970px;
  }
  @media (min-width: 1200px) {
    width: 1170px;
  }

  ${props =>
    props.fluid &&
    css`
      width: 100% !important;
    `}
`;

export default Container;
