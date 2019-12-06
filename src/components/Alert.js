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
  color: #f0f6fc;
  background-color: #5682b0;
  border-color: #b8daff;
  `};

${props =>
  props.yellow &&
  css`
   background: #ffd500 ;
   color: #000000;
  `};

${props =>
  props.red &&
  css`
  color: #eae2e2;
  background-color: #cc0012;
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
   color: #191a1c;
   background: #f8f9fa;
  `};


`;
export default Alert;
