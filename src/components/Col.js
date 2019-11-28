import styled from 'styled-components';

function getWidth(span) {
  if (!span) return;
  const width = (span / 12) * 100;
  return `width: ${width}%;`;
}

const Col = styled.div`
  box-sizing: border-box;
  position: relative;
  background-color:rgba(86,61,124,.15);
  margin-bottom: 5px;
  padding:15px;
  border-left:1px solid;

  ${({ xs }) => (xs ? getWidth(xs) : 'width: 100%')};

  @media only screen and (min-width: 768px) {
    ${({ sm }) => sm && getWidth(sm)};
  }

  @media only screen and (min-width: 992px) {
    ${({ md }) => md && getWidth(md)};
  }

  @media only screen and (min-width: 1200px) {
    ${({ lg }) => lg && getWidth(lg)};
  }
`;

export default Col;
