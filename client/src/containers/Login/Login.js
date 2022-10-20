import React, { Component } from "react";
import Button from "../../components/Button/Button";
import TextInput from "../../components/TextInput";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userActions from "../../store/actions/userActions";
import { EMAIL_VALID_REGEX } from "../../constants/regexp";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      formError: "",
    };
  }

  handleEmail = (event) => {
    this.setState({ email: event.target.value, formError: "" });
  };

  handlePassword = (event) => {
    this.setState({ password: event.target.value, formError: "" });
  };

  isFieldsValid = () => {
    const { email, password } = this.state;
    if (!EMAIL_VALID_REGEX.test(String(email).toLowerCase())) {
      this.setState({ formError: "Email is invalid" });
      return false;
    }
    if (password.length < 8) {
      this.setState({ formError: "Password is invalid, min length 8" });
      return false;
    }
    return true;
  };

  handleLogin = () => {
    const { email, password } = this.state;
    if (this.isFieldsValid()) {
      this.props.loginUserAction({ email, password });
    }
  };

  render() {
    const { email, password, formError } = this.state;
    const { error } = this.props;
    return (
      <div className="form">
        Login
        <TextInput
          type="email"
          value={email}
          placeholder="Please enter your email"
          onChange={this.handleEmail}
        />
        <TextInput
          type="password"
          value={password}
          placeholder="Please enter your password"
          onChange={this.handlePassword}
        />
        <Button onClick={this.handleLogin}>Login</Button>
        {error && <div>{error}</div>}
        {formError && <div>{formError}</div>}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  error: state.user.loginError,
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(userActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
