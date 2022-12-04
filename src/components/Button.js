import styled from 'styled-components';

export default styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary.main};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.boxShadow};
  border: none;
  height: 52px;
  padding: 0 16px;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  outline: none;
  transition: background-color .2s ease-in;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.light};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.primary.dark};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.gray[100]};
    cursor: not-allowed;
  }
`;
