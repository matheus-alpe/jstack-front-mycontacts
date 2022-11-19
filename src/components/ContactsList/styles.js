import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;

  strong {
    font-weight: bold;
    font-size: 24px;
    color: #222;
  }

  a {
    color: ${({ theme }) => theme.colors.primary.main};
    font-weight: bold;
    display: block;
    border: 2px solid ${({ theme }) => theme.colors.primary.main};
    border-radius: 4px;
    padding: 8px 16px;
    transition: all 0.2s ease-in;

    &:hover {
      background: ${({ theme }) => theme.colors.primary.main};
      color: #fff;
    }
  }
`;
