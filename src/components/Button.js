import styled, { css } from 'styled-components';

const Button = styled.button`
  margin: 0.1em;
  border-color: transparent;
  border-radius: 14px;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.55rem;
  font-weight: 400;
  ${props =>
    props.large &&
    css`
      margin: 0.1em;
      border-color: transparent;
      border-radius: 14px;
      border: 1px solid transparent;
      padding: 0.475rem 0.85rem;
      font-size: 2rem;
      line-height: 1.5;
      border-radius: 0.55rem;
      font-weight: 500;
    `};
  ${props =>
    props.update &&
    css`
      background: yellow;
      color: black;
    `};
  ${props =>
    props.delete &&
    css`
      background: red;
      color: white;
    `};
  ${props =>
    props.dark &&
    css`
      background: black;
      color: white;
    `};
  ${props =>
    props.light &&
    css`
      background: white;
      color: black;
    `};
  ${props =>
    props.submit &&
    css`
      background: blue;
      color: white;
    `};
`;
export default Button;
