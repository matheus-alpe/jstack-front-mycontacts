import styled from 'styled-components';

export const HeaderContainer = styled.header`
  margin-top: 74px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;

  img {
    width: 100%;
    max-width: 200px;
  }
`;

export const InputSearchContainer = styled.div`
  width: 100%;

  input {
    height: 50px;
    width: 100%;
    background-color: #fff;
    border: none;
    border-radius: 25px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.04);
    padding: 0 1.2em;
    outline-color: #4f61f678;

    &::placeholder {
      color: #bcbcbc;
    }
  }
`;
