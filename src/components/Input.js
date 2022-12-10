import styled, { css } from 'styled-components';

export default styled.input`
  --input-color: #000;
  --placeholder-color: ${({ theme }) => theme.colors.gray[200]};
  --focus-border-color: ${({ theme }) => theme.colors.primary.main};

  width: 100%;
  background-color: #fff;
  border: 2px solid transparent;
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.boxShadow};
  height: 52px;
  padding: 0 16px;
  color: var(--input-color);
  font-size: 1rem;
  outline: none;
  transition: border-color .2s ease-in;

  &:focus {
    border-color: var(--focus-border-color);
  }

  &::placeholder {
    color: var(--placeholder-color);
  }

  ${({ theme, error }) => error && css`
    --input-color: ${theme.colors.red[600]};
    --placeholder-color: ${theme.colors.red[600]};
    --focus-border-color: ${theme.colors.red[600]};
    border-color: var(--focus-border-color);
  `}
`;
