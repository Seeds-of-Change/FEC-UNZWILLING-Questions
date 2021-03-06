import React from 'react';
import PropTypes from 'prop-types';
import style from './Button.css';

function Button({ handleAsk }) {
  return (
    <button
      type="button"
      onClick={handleAsk}
      className={style.button}
    >
      Answer this Question
    </button>
  );
}

Button.propTypes = {
  handleAsk: PropTypes.func.isRequired,
};

export default Button;
