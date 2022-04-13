import styled from 'styled-components/macro';

// eslint-disable-next-line import/prefer-default-export
export const StyledForm = styled.form`
  margin: 10px auto;
`;

export const Group = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid #ccc;
  padding: 8px 10px;
  border-radius: 8px;
`;

export const Input = styled.input`
  flex-grow: 2;
  border: none;
  font-size: 16px;

  &:focus {
    outline: none;
  }
`;

export const ValidationMessage = styled.div`
  padding-top: 10px;
  text-align: center;
  color: rebeccapurple;
`;
