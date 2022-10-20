import React, { Component } from "react";
import PropTypes from "prop-types";

class Button extends Component {
  render() {
    const { children, onClick } = this.props;
    return <button onClick={onClick}>{children}</button>;
  }
}

Button.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default Button;
