import styled from 'react-emotion';
import {Colors} from '../constants';

export const Wrapper = styled.div`
  font-family: 'Helvetica';
  height: 300px;
  width: 100%;
  background-color: ${Colors.headerBackground};
`;

export const Title = styled.div`
  text-align: center;
  font-size: 40px;
  color: ${Colors.textBlack};
`;

export const SubTitle = styled.div`
  padding: 10px 0;
  text-align: center;
  font-size: 20px;
  color: ${Colors.textGrey};
`;

export const Menu = styled.div`
  margin: 0 auto;
  padding: 30px 0;
  font-size: 16px;
  color: ${Colors.textGrey};
  display: flex;
  justify-content: space-between;
  width: 600px;
`;

export const MenuItem = styled.div`
  padding: 0 10px;
`;

export const Button = styled.div`
  margin: 0 auto;
  text-align: center;
  background-color: ${props => props.backgroundColor};
  color: ${props => props.color};
  font-weight: 600;
  font-size: 14px;
  width: 100px;
  border-radius: 15px;
  padding: 12px;
`;
