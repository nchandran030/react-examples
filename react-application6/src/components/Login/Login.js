import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    console.log("Constructor from Login.js ", props);
    this.state = {
      userName: "",
      password: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    console.log('data---',this.state);
    e.preventDefault();
    this.props.history.push("/dashboard");
  };

  render() {
    return (
      <div className="loginDiv">
        <div id="login">
          <h3 className="text-center text-white pt-5">Login form</h3>
          <div className="container">
            <div
              id="login-row"
              className="row justify-content-center align-items-center"
            >
              <div id="login-column" className="col-md-6">
                <div id="login-box" className="col-md-12">
                  <form
                    id="login-form"
                    className="form"
                    action=""
                    method="post"
                  >
                    <h3 className="text-center text-info">Login</h3>
                    <div className="form-group">
                      <label className="text-info">Username:</label>
                      <br />
                      <input
                        type="text"
                        id="username"
                        name="userName"
                        value={this.state.userName}
                        onChange={(e) => this.handleChange(e)}
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <label className="text-info">Password:</label>
                      <br />
                      <input
                        type="password"
                        id="password"
                        name="password"
                        value={this.state.password}
                        onChange={(e) => this.handleChange(e)}
                        className="form-control"
                      />
                      <div className="form-group">
                        <br />
                        <input
                          type="button"
                          value="Submit"
                          className="btn btn-info btn-md"
                          onClick={(e) => this.onSubmit(e)}
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
