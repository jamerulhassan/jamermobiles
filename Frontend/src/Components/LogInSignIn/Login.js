
import "./Login.css";
import LogInForm from "./LogInForm";
const Login = ({handleLogAndSign, loginStatus}) => {
  return (
    <div className="register">
      <LogInForm handleLogAndSign = {handleLogAndSign} loginStatus= {loginStatus} />
    </div>
    
    
  );
};

export default Login;
