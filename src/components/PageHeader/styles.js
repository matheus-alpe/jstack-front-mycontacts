import styled from 'styled-components';

export const Container = styled.header`
  a {
    display: flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;


    img {
      transform: rotate(-90deg);
    }

    span {
      color: ${({ theme }) => theme.colors.primary.main};
      font-weight: bold;
    }
  }

  h1 {
    margin-top: 8px;
    font-size: 24px;
  }
`;
