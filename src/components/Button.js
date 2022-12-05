import styled, { css } from 'styled-components';

export default styled.button`
  background: transparent;
  border: none;
  height: 52px;
  padding: 0 16px;
  font-size: 16px;
  outline: none;

  &:not(.flat) {
    --bg-dark: ${({ theme }) => theme.colors.primary.dark};
    --bg-main: ${({ theme }) => theme.colors.primary.main};
    --bg-light: ${({ theme }) => theme.colors.primary.light};

    ${({ theme, danger }) => danger && css`
      --bg-dark: ${theme.colors.red[900]};
      --bg-main: ${theme.colors.red[600]};
      --bg-light: ${theme.colors.red[200]};
    `}

    font-weight: bold;
    color: #fff;
    background-color: var(--bg-main);
    border-radius: ${({ theme }) => theme.borderRadius};
    box-shadow: ${({ theme }) => theme.boxShadow};
    transition: background-color .2s ease-in;



    &:hover {
      background-color: var(--bg-light);
    }

    &:active {
      background-color: var(--bg-dark);
    }

    &:disabled {
      --bg-main: ${({ theme }) => theme.colors.gray[100]};
      pointer-events: none;
    }
  }

`;
