import styled from 'styled-components';

const Row = styled.div`
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: inherit;
  -ms-flex-pack: inherit;
  justify-content: inherit;
  -webkit-box-align: stretch;
  -ms-flex-align: stretch;
  align-items: stretch;
  width: 100% !important;
`;

export default Row;
