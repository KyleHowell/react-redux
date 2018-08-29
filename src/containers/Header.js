import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Colors} from '../constants';
import {
  Wrapper,
  Title,
  SubTitle,
  Menu,
  MenuItem,
  Button,
} from './Header.styles';

const menuTitles = [
  'Documentation',
  'Pricing',
  'Join us on Slack',
  'Contact Us',
];

class Header extends Component {
  render() {
    return (
      <Wrapper>
        <Menu>
          {menuTitles.map(title => {
            return <MenuItem>{title}</MenuItem>;
          })}
        </Menu>
        <Title>All you need is code</Title>
        <SubTitle>Make serverless endpoints</SubTitle>
        <Button backgroundColor={Colors.green} color={Colors.white}>
          TRY IT NOW!
        </Button>
      </Wrapper>
    );
  }
}

export default Header;
