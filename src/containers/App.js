import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {setCheckbox} from '../actions/app';

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
        Hello World
        <input
          type="checkbox"
          checked={this.props.checked}
          onChange={this.handleCheckChange}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
