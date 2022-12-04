import styled from 'styled-components';

export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.6);
  position: absolute;
  inset: 0;
  backdrop-filter: blur(3.5px);
  display: grid;
  place-items: center;
`;

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
