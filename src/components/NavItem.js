import styled, { css } from 'styled-components';

const NavItem = styled.div`
  float: left;
  font-size: 18px;
  padding: 25px 20px 25px 20px;
  font-size: 1.15em;
  font-weight: bold;
  cursor: pointer;
  color: #f0f6fc;
  :focus {
    outline: none;
  }
  :hover {
    outline: none;
    background-color: #0427b5;
  }
  ${props =>
    props.right &&
    css`
      float: right;
    `};
  ${props =>
    props.disable &&
    css`
      color: #808e9c;
      :hover {
        background-color: #3451c7;
      }
    `};
`;
export default NavItem;
