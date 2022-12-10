import styled from 'styled-components';

export const Container = styled.div`
  small {
    color: ${({ theme }) => theme.colors.red[600]};
    font-size: .75rem;
    display: block;
    margin-top: 8px;
  }
`;
