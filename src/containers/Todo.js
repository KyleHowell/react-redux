import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {Item, StatusIndicatior} from './Todo.styles';

const mapStateToProps = state => ({
  items: state.todo.items,
});

class Todo extends Component {
  static propTypes = {
    items: PropTypes.array,
  };

  render() {
    return (
      <div>
        {this.props.items.map(item => {
          return (
            <Item>
              <StatusIndicatior complete={item.status} />
              {item.text}
            </Item>
          );
        })}
      </div>
    );
  }
}

export default connect(mapStateToProps)(Todo);
