import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {createTodo, toggleTodoStatus} from '../actions/todo';
import {
  InputWrapper,
  Item,
  StatusIndicatior,
  SubmitButton,
} from './Todo.styles';

const mapStateToProps = state => ({
  items: state.todo.items,
});

class Todo extends Component {
  static propTypes = {
    items: PropTypes.array,
  };

  state = {inputText: ''};

  onInputChange = event => {
    this.setState({inputText: event.target.value});
  };

  onInputSubmit = () => {
    this.props.dispatch(
      createTodo({text: this.state.inputText, status: false})
    );
    this.setState({inputText: ''});
  };

  render() {
    return (
      <div>
        <InputWrapper>
          <SubmitButton onClick={this.onInputSubmit}> Submit </SubmitButton>
          <input
            type="text"
            value={this.state.inputText}
            onChange={this.onInputChange}
          />
        </InputWrapper>
        {this.props.items.map(item => {
          return (
            <Item key={item.text}>
              <StatusIndicatior
                complete={item.status}
                onClick={() => this.props.dispatch(toggleTodoStatus(item))}
              />
              {item.text}
            </Item>
          );
        })}
      </div>
    );
  }
}

export default connect(mapStateToProps)(Todo);
