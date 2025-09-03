
import "./Login.css"
import SignupForm from "./SignupForm";
const Signup = ({handleLogAndSign, loginStatus}) => {
  return (
    <div className="register">
        <SignupForm  handleLogAndSign ={handleLogAndSign} loginStatus = {loginStatus}/>
    </div>

  )
}

export default Signup