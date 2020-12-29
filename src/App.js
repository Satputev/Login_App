import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <input type="text" ref="uname" placeholder="Username" required></input>
        <br></br>
        <br></br>
        <input type="text" ref="upwd" placeholder="Password" required></input>
        <br></br>
        {<h1 style={{ color: "red" }}>{JSON.stringify(this.props.login)}</h1>}
        <h1 style={{ color: "green" }}>
          {JSON.stringify(this.props.register)}
        </h1>
        <br></br>
        <button
          onClick={() => {
            this.props.loginm(this.refs.uname.value, this.refs.upwd.value);
          }}
        >
          Login
        </button>
        <button
          onClick={() => {
            this.props.registerm(this.refs.uname.value, this.refs.upwd.value);
          }}
        >
          Register
        </button>
      </div>
    );
  }
}
const recive = (state) => {
  return {
    login: state.login,
    register: state.register,
  };
};

const send = (dispatch) => {
  return {
    loginm: (arg1, arg2) => {
      dispatch({ type: "LOGIN", value: { uname: arg1, upwd: arg2 } });
    },
    registerm: (arg1, arg2) => {
      dispatch({ type: "REGISTER", value: { uname: arg1, upwd: arg2 } });
    },
  };
};

export default connect(recive, send)(App);
