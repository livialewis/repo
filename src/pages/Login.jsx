import { useState, useEffect } from "react";
import { Navigate } from "react-router";

function Login() {
  const [state, setState] = useState({ email: "", password: "" });
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setLoggedIn(true);
    }
  });

  const handleForm = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const submitForm = (e) => {
    e.preventDefault();
    if (state.email != "" && state.password != "") {
      localStorage.setItem("user", JSON.stringify(state));
      setLoggedIn(true);
    } else {
      alert("email and password required");
    }
  };
  return loggedIn ? (
    <Navigate to="/dashboard" />
  ) : (
    <div className="content">
      <div className="form-div">
        <div className="card">
          <div className="card-body">
            <h1 className="title">Log In</h1>
            <form action="" onSubmit={submitForm}>
              <div className="form-group mt-3">
                <label htmlFor="">Email</label>
                <input
                  type="email"
                  name="email"
                  value={state.email}
                  className="form-control"
                  placeholder="enter your email"
                  onChange={handleForm}
                />
              </div>

              <div className="form-group mt-3">
                <label htmlFor="">Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="******"
                  value={state.value}
                  onChange={handleForm}
                />
              </div>

              <div className="form-group mt-3">
                <input
                  type="submit"
                  className="btn btn-primary"
                  value="Log In"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
