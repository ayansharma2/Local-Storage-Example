import { Component, useEffect, useReducer } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      disabled: true,
      isEmailError: false,
      isPassWordError: false,
    };
  }

  onEmailChange = (event) => {
    this.setState({
      email: event.target.value,
    });
    if (!this.state.email.includes("@")) {
      this.setState({
        isEmailError: true,
      });
    } else {
      this.setState({
        isEmailError: false,
      });
    }

    this.checkValidity();
  };

  checkValidity = () => {
    this.setState((prevState) => {
      console.log(prevState.password.length);
      if (prevState.email.includes("@") && prevState.password.length >= 7) {
        return {
          disabled: false,
        };
      } else {
        return {
          disabled: true,
        };
      }
    });
  };

  onPasswordChange = (event) => {
    this.setState({
      password: event.target.value,
    });
    if (this.state.password.length < 6) {
      this.setState({
        isPassWordError: true,
      });
    } else {
      this.setState({
        isPassWordError: false,
      });
    }
    this.checkValidity();
  };

  changeState = () => {
    this.setState({
      email: "",
      password: "",
    });

    this.props.changeState(true);
  };

  render() {
    return (
      <div className="bg-white flex flex-col rounded-xl w-1/2 self-center mt-24 px-5 py-5 shadow-2xl shadow-purple-700">
        <span>Email</span>
        <input
          value={this.state.email}
          onChange={this.onEmailChange}
          className={`mt-4 px-3 py-2 rounded-lg focus:outline-none ${
            this.state.isEmailError ? "bg-red-400" : "bg-white"
          } border-2 ${
            this.state.isEmailError ? "border-red-900" : "border-black"
          } focus:bg-purple-400 focus:border-purple-800`}
        />
        <span className="mt-6">Password</span>
        <input
          value={this.state.password}
          onChange={this.onPasswordChange}
          type="password"
          className={`mt-4 px-3 py-2 rounded-lg focus:outline-none ${
            this.state.isPassWordError ? "bg-red-400" : "bg-white"
          } border-2 ${
            this.state.isPassWordError ? "border-red-900" : "border-black"
          } focus:bg-purple-400 focus:border-purple-800`}
        />
        <button
          onClick={this.changeState}
          disabled={this.state.disabled}
          className={`mt-7 ${
            this.state.disabled ? "bg-slate-400" : "bg-purple-900"
          } rounded-xl ${
            this.state.disabled ? "text-gray-500" : "text-white"
          } py-2`}
        >
          Login
        </button>
      </div>
    );
  }
}

export default Form;
