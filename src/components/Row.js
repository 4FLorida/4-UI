import styled, { css } from 'styled-components';

const Row = styled.div`
  position: relative;
  display: flex;
  min-width: 100%;

  // * Props *

  ${props =>
    props.center &&
    css`
      text-align: center;
      display: block;
    `}
`;

export default Row;
