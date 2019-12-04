import styled, { css } from 'styled-components';

const Alert = styled.div`

padding: .75rem 1.25rem;
margin-bottom: 2rem;
margin-top: 2rem;
border: 1px solid transparent;
min-width:540px;
width:auto;
border-radius: .25rem;
font-size: 1rem;
font-weight: 400;
line-height: 1.5;


${props =>
  props.blue &&
  css`
  color: #004085;
  background-color: #cce5ff;
  border-color: #b8daff;
  `};

${props =>
  props.yellow &&
  css`
   background: yellow ;
   color: black;
  `};

${props =>
  props.red &&
  css`
  color: #eae2e2;
  background-color: #f13142;
  border-color: #f5c6cb;
      
  `};
${props =>
  props.dark &&
  css`
  background: #0f1112;
  color: #ffffff;
  `};
${props =>
  props.light &&
  css`
   color: #343a40;
   background: #f8f9fa;
  `};


`;
export default Alert;