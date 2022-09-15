import Login from "./components/login";
import Logout from "./components/logout";
import "./App.css";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

function App() {
  const user = useSelector(selectUser);
  return <div className="App">{user.loggedIn ? <Logout /> : <Login />}</div>;
}

export default App;
