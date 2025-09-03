import React, { useState } from 'react'
import "./orderPage.css"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import LoadingOFLogSign from '../../Components/loading/LoadingOFLogSign';

const OrderPage = ({individualData}) => {
  const[errMsg, setErrmsg] = useState('');
  const[Name, setName] = useState('');
  const[Phoneno, setPhoneno] = useState('');
  const[address, setaddress] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const nav = useNavigate();
  const validate = () => {
    if(Name.trim().length === 0 || Phoneno.length === 0 ||address.trim().length === 0){
      setErrmsg("fill the fields");
      return false;
    }
    return true;
  }
  const getFieldValue = (fieldName) => {
    return individualData?.[fieldName]?.stringValue || 'N/A';
  };
  const handleOrder = async (e) =>{
    e.preventDefault();
    if(!validate()){
        return;
    }
    else{
      try{
        setErrmsg('');
        setIsLoading(true);
        const response = await axios.post("https://democonnection.free.nf/jamermobilesPhpBackend/buy.php",{Name, Phoneno, address})   
       /*  console.log(response); */
        if(response.data.status === "success"){
          nav("/");
          alert("your order has successfully placed!!!")
        }else {
          setErrmsg("please try again")
        }
      }catch(err){          
        setErrmsg(err.msg); 
      } 
      finally{
        setIsLoading(false);
      }
    }
  }
  return (
    <div className='OrderPage'>
        <form method='post' onSubmit={handleOrder}>
            <table>
              <thead className='orderTebleThead'>
                <tr className='mobileDescriptions'>
                  <th align='center'>
                    <figure>
                    <img src={getFieldValue('mobileImage')}
                      alt={getFieldValue('mobileName')}
                      title={getFieldValue('mobileName')}
                      width='100px'
                      height='100px'
                    />
                    </figure>
                  </th>
                  <td align='center'>
                    <figcaption>
                      <div>
                        <div>
                          <h1>{getFieldValue('mobileName')}</h1>
                          <p>{getFieldValue('mobileRamRom')}</p>
                          <p>{getFieldValue('mobileResolution')}</p>
                          <p>{getFieldValue('mobileCamera')}</p>
                          <p>{getFieldValue('mobileBattery')}</p>
                          <p>{getFieldValue('mobileOs')}</p>
                        </div>
                      </div>
                    </figcaption>
                  </td>
                </tr>
              </thead>
              <tbody className='orderTebleTBody'>
                <tr className='inputRows'>
                  <th><label htmlFor="name">Name </label></th>
                  <td><input type="text" name="name" id="name" onChange={(e)=>setName(e.target.value)} /></td>
                </tr>
                <tr className='inputRows'>
                  <th><label htmlFor="phoneNumber">Phone no</label></th>
                  <td ><input type="text" name="phoneNumber" id="phoneNumber" onChange={(e)=>setPhoneno(e.target.value)} /></td>
                </tr>
                <tr className='inputRows'>
                  <th><label htmlFor="address">Address</label></th>
                  <td ><input type="text" name="address" id="address" onChange={(e)=>setaddress(e.target.value)} /></td>
                </tr >
                <tr className='inputRows'>
                  <th><label htmlFor="payMethod">Pay method</label></th>
                  <td >Cash on delivery<input type="checkbox" name="payMethod" id="payMethod" defaultChecked /></td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td>{isLoading ? <LoadingOFLogSign /> : errMsg }</td>       
                  <td colSpan={2} align='right'>
                    <input type="submit" name="submit" value="Buy"/>
                  </td>
                </tr>
              </tfoot>
            </table>
        </form>

    </div>
  )
}

export default OrderPage