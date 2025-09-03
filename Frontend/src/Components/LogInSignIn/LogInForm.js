
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import LoadingOFLogSign from '../loading/LoadingOFLogSign';

const LogInForm = ({handleLogAndSign, loginStatus}) => {
    const nav = useNavigate();
    const [errMsg, setErrmsg] = useState('');
    const[userName, setuserName] = useState('');
    const[password, setpassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const validate =()=>{
      if(userName.trim().length === 0 || password.length === 0){
          setErrmsg("fill the fields");
          return false;
      }
      return true;
      }
    const handleLoginAndLogout = async (e) => {
      e.preventDefault();
      if(e.nativeEvent.submitter.name === "Logout"){
        localStorage.removeItem("isLogin")
        nav("/")
        window.location.reload();
      }else{
        if(!validate()){
        return;
        }else{
          try{
            setErrmsg('');
            setIsLoading(true);
            const response = await axios.post("https://democonnection.free.nf/jamermobilesPhpBackend/getUser.php",{userName,password})
            if(response.data.status === "confirm"){
                localStorage.setItem("isLogin","true")
                nav("/")
                handleLogAndSign();
            }else if(response.data.status === "userNotFound"){
                setErrmsg("You didn't register yet!! Do the Signup")
            }else if(response.data.status === "cancel"){
                setErrmsg("Enter the correct password")
            }
          }
          catch(err){
              setErrmsg(err.msg);
              
              
          }
          finally{
            setIsLoading(false);
          }
        }
      }
    }

  return (
     <>
      <form method="post" onSubmit={(e)=>handleLoginAndLogout(e)} className='loginSignForm'>
          <table className='loginSignTable'>
            {!loginStatus ?
            <tbody className='loginSignTbody'>
              <tr className='inputRows'>
                <th align='centre'><label htmlFor="userName">User name </label></th>
                <td  colSpan={2}><input type="text" name="userName" id="userName" onChange={(e)=>setuserName(e.target.value)} required/> </td>
              </tr>
              <tr className='inputRows'>
                <th align='centre'><label htmlFor="password">Password </label></th>
                <td  colSpan={2}><input type="password" name="password" id="password" onChange={(e)=>setpassword(e.target.value)} required/></td>
              </tr>
              <tr className='inputRows'>
                <td align='centre'>
                <Link to="/signup" > <p  style={{ paddingTop:"5px",color:'#ffffff' }} className='singnUpButton'>Signup</p> </Link> <br />

                </td>
                <td >{isLoading ? <LoadingOFLogSign /> : errMsg }</td>
                <td cstyle={{ textAlign: 'right' }} >
                  <input type="submit" value="Login" name="logIn" /> <br />
                </td>
              </tr>
            </tbody> :
            <tbody className='loginSignTbody'>
              <tr className='inputRows'><td>Are you sure want to logout!!</td></tr>
              <tr className='inputRows'><td align='center'><input type="submit" value="Logout" name='Logout'/></td></tr>
            </tbody>
            }
          </table>
      </form>
    </>
  )
}

export default LogInForm