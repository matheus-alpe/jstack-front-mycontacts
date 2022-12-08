import styled, { css } from 'styled-components';

export default styled.div`
  background: rgba(0, 0, 0, 0.6);
  position: absolute;
  inset: 0;
  backdrop-filter: blur(3.5px);
  display: grid;
  place-items: center;

  ${({ loader }) => loader && css`
    background: rgba(246, 245, 252, 0.7);
  `}
`;
