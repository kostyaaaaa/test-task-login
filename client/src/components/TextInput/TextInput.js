import React, { Component } from "react";
import PropTypes from "prop-types";

class TextInput extends Component {
  render() {
    const { type, value, onChange, placeholder } = this.props;
    return (
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    );
  }
}

TextInput.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

export default TextInput;
