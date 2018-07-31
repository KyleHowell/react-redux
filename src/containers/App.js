import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Todo from './Todo';
import {setCheckbox} from '../actions/app';
import {Title} from './App.styles';

const mapStateToProps = state => ({
  checked: state.app.checkbox,
});

class App extends Component {
  static propTypes = {
    checked: PropTypes.bool,
  };

  handleCheckChange = event => {
    this.props.dispatch(setCheckbox(event.target.checked));
  };

  render() {
    return (
      <div>
        <Title>Hello World</Title>
        <input
          type="checkbox"
          checked={this.props.checked}
          onChange={this.handleCheckChange}
        />

        <Todo />
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
