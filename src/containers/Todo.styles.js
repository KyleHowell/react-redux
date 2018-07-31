import styled from 'react-emotion';

export const Item = styled.div`
  display: flex;
`;

export const StatusIndicatior = styled.div`
  height: 20px;
  width: 20px;
  background-color: ${props => (props.complete ? 'green' : 'red')};
`;
