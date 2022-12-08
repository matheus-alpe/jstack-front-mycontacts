import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  max-width: 450px;
  padding: 24px;
  background: #fff;
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.boxShadow};

  h1 {
    font-weight: bold;
    font-size: 24px;
    color: ${({ theme, danger }) => (danger && theme.colors.red[600]) || theme.colors.gray[900]}
  }
`;

export const Footer = styled.footer`
  margin-top: 24px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;

  button.flat {
    color: ${({ theme }) => theme.colors.gray[200]};
    transition: color .2s ease-in;

    &:hover {
      color: inherit;
    }
  }
`;
