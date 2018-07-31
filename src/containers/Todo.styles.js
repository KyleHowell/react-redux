import styled from 'react-emotion';

export const Item = styled.div`
  display: flex;
  margin-bottom: 5px;
`;

export const StatusIndicatior = styled.div`
  height: 20px;
  width: 20px;
  background-color: ${props => (props.complete ? 'green' : 'red')};
  margin-right: 5px;
  cursor: pointer;
`;

export const InputWrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

export const SubmitButton = styled.div`
  height: 20px;
  margin-right: 10px;
  background-color: grey;
  border: 1px solid black;
`;
