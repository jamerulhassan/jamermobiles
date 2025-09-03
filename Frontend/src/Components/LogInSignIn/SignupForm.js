import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import LoadingOFLogSign from '../loading/LoadingOFLogSign';

const SignupForm = ({handleLogAndSign, loginStatus}) => {
    const[errMsg, setErrmsg] = useState('');
    const[userName, setuserName] = useState('');
    const[password, setpassword] = useState('');
    const[address, setaddress] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const nav = useNavigate();
    const validate = () => {
      if(userName.trim().length === 0 || password.length === 0 ||address.trim().length === 0){
        setErrmsg("fill the fields");
        return false;
      }
      return true;
    }
    const handleSignup= async (e)=>{ 
      e.preventDefault();
      if(loginStatus){
        try{
          setErrmsg('');
          setIsLoading(true);
          const response = await axios.post("https://democonnection.free.nf/jamermobilesPhpBackend/deregister.php",{userName, password})   
          /* console.log(response.data.status); */
          if(response.data.status === "Deleted"){
            localStorage.removeItem("isLogin");
            nav("/");
            window.location.reload();
          }else if(response.data.status === "User not found"){
            setErrmsg(response.data.message);
          }else if(response.data.status === "not deleted"){
            setErrmsg(response.data.message);
          }else if(response.data.status === "password incorrect"){
            setErrmsg(response.data.message);
          }
        }catch(err){          
          setErrmsg(err.msg); 
         
        } 
        finally{
            setIsLoading(false);
          }
      }else{
        if(!validate()){
          return;
        }else{
          try{
            setErrmsg('');
            setIsLoading(true);
            const response = await axios.post("https://democonnection.free.nf/jamermobilesPhpBackend/registerUser.php",{userName, password, address})   
            /* console.log(response.data.status); */
            if(response.data.status === "success"){
              localStorage.setItem("isLogin","true");
              nav("/");
              handleLogAndSign();
            }else{
              setErrmsg(response.data.message);
            }
          }catch(err){
            setErrmsg(err.message); 
             console.log(err);
          }
          finally{
            setIsLoading(false);
          }
        }
      }
    }
  return (
    <>
    <form method="post" onSubmit={handleSignup} className='loginSignForm'>
          <table className='loginSignTable'>
            {!loginStatus ? 
              <tbody className='loginSignTbody'>
                <tr className='inputRows'>
                  <th align='centre'><label htmlFor="userName">User name </label></th>
                  <td ><input type="text" name="userName" id="userName" onChange={(e)=>setuserName(e.target.value)} required /> </td>
                  
                </tr>
                <tr className='inputRows'>
                  <th align='centre'><label htmlFor="password">Password </label></th>
                  <td ><input type="password" name="password" id="password" onChange={(e)=>setpassword(e.target.value)} required/></td>
                </tr>
                <tr className='inputRows'>
                  <th align='centre'><label htmlFor="address">Address </label></th>
                  <td ><input type="text" name="address" id="address" onChange={(e)=>setaddress(e.target.value)} required/></td>
                </tr>
                <tr className='inputRows'>
                  <td>{isLoading ? <LoadingOFLogSign /> : errMsg }</td>
                  <td align='centre'>
                    <input type="submit" value="Signup" name="Signup" /> <br />
                </td>
                
                </tr>
            </tbody> :
            <tbody className='loginSignTbody'>
                <tr className='inputRows'>
                  <th align='centre'><label htmlFor="userName">User name :</label></th>
                  <td ><input type="text" name="userName" id="userName" onChange={(e)=>setuserName(e.target.value)} required/> </td>
                  
                </tr>
                <tr className='inputRows'>
                  <th align='centre'><label htmlFor="password">Password :</label></th>
                  <td ><input type="password" name="password" id="password" onChange={(e)=>setpassword(e.target.value)} required/></td>
                </tr>
                <tr className='inputRows'>
                  <td align='centre'>{isLoading ? <LoadingOFLogSign /> : errMsg }</td>
                  <td align='centre'>
                    <input type="submit" value="Signout" name="Signout" /> <br />
                </td>
                </tr>
            </tbody> }
        </table>
      </form>
      
    </>
  )
}

export default SignupForm