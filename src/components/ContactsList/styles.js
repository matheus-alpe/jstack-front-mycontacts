import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;

  strong {
    font-weight: bold;
    font-size: 24px;
  }

  a {
    color: ${({ theme }) => theme.colors.primary.main};
    font-weight: bold;
    display: block;
    border: 2px solid ${({ theme }) => theme.colors.primary.main};
    border-radius: ${({ theme }) => theme.borderRadius};
    padding: 8px 16px;
    transition: all 0.2s ease-in;

    &:hover {
      background: ${({ theme }) => theme.colors.primary.main};
      color: #fff;
    }
  }
`;

export const ListContainer = styled.div`
  margin-top: 24px;
`;

export const ListHeader = styled.header`
  margin-bottom: 8px;

  button {
    background: transparent;
    border: none;
    display: flex;
    align-items: center;
    gap: 8px;

    span {
      color: ${({ theme }) => theme.colors.primary.main};
      font-weight: bold;
    }
  }
`;

export const ListBody = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Card = styled.li`
  background: #fff;
  box-shadow: ${({ theme }) => theme.boxShadow};
  padding: 16px;
  border-radius: ${({ theme }) => theme.borderRadius};
  display: flex;
  align-items: center;
  justify-content: space-between;

  .info {
    display: flex;
    flex-direction: column;
    gap: 4px;

    .name {
      display: flex;
      align-items: center;
      gap: 8px;

      small {
        background: ${({ theme }) => theme.colors.primary.lighter};
        color: ${({ theme }) => theme.colors.primary.main};
        text-transform: uppercase;
        font-weight: bold;
        font-size: 12px;
        padding: 3px 5px;
        border-radius: ${({ theme }) => theme.borderRadius};
      }
    }

    span {
      display: block;
      font-size: 14px;
      color: ${({ theme }) => theme.colors.gray[200]};
    }
  }

  .actions {
    display: flex;
    align-items: center;
    gap: 10px;

    button {
      background: transparent;
      border: none;
    }
  }
`;
