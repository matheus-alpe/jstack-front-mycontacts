import styled from 'styled-components';

export default styled.select`
  width: 100%;
  background-color: #fff;
  border: 2px solid transparent;
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.boxShadow};
  height: 52px;
  padding: 0 16px;
  font-size: 1rem;
  outline: none;
  cursor: pointer;
  transition: border-color .2s ease-in;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary.main};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray[200]};
  }
`;
