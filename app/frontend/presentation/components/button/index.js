import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { genId, shouldComponentUpdate } from './../../../enhance';
import './styles/main.scss';

const _className = Symbol();

@genId('text')
@shouldComponentUpdate
export default class Button extends React.Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    className: PropTypes.string,
    buttonText: PropTypes.string,
    type: PropTypes.string,
  };

  static defaultProps = {
    className: '',
    type: 'button',
  };

  get [_className]() {
    const { className } = this.props;

    return _.compact(['btn', 'btn-default', className]).join(' ');
  }

  render() {
    const { onClick, buttonText, type } = this.props;

    return (
      <button
        className={this[_className]}
        styleName="db-button"
        onClick={onClick}
        type={type}
      >
        {buttonText}
      </button>
    );
  }
}
