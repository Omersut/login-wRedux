import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../features/userSlice";
import "./login.css";

 function Logout(){
  const user = useSelector(selectUser);
  
    const dispatch = useDispatch();
     const handleLogout = (e) => {
        e.preventDefault()
        dispatch(logout())};
 
    return(

        <div className="container">
        <h2>hi, {user.name}</h2>
        <button type="submit" onClick={(e) => handleLogout(e) } className="btn btn-large">logOut</button>
       
       
      </div>
  
  
    )
}
export default Logout;