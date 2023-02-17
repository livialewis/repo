import { Link } from "react-router-dom";
function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div>
      <div className="container">
        <div className="content">
          <h1>Welcome To Your Dashboard</h1>
          <p>
            {" "}
            This is your dashboard and it is only accessible when you log in
          </p>
          <p>
            Your email is : <b>{user.email}</b>
          </p>
          <p>
            <Link to="/logout">Log Out</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
