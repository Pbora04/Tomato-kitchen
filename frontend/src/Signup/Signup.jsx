import { Link, useNavigate } from 'react-router-dom';
import './signup.css'
// import {axios} from 'axios'
import { useState } from "react"
const Signup = () => {
  const navigate = useNavigate()
    const[show,setShow]=useState(true)
     
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [address, setAddress] = useState("");


    
    let logFunc =()=>{
    setShow(true)
    }
    let signFunc=()=>{
        setShow(false)
    }
  
    const registerFunc=async()=>{
        let result =  await fetch(' http://localhost:5000/registeration',{
        method:"POST",
        body:JSON.stringify({name,email,password,mobile,address}),
        headers:{
            "content-type":"application/json"
        }
    })
    result =await result.json()
    console.log(result) 
    navigate('/')

    }
    
 const loginFunc = async()=>{
  let result = await fetch('http://localhost:5000/login',{
    method : "POST",
    body:JSON.stringify({email,password}),
    headers:{
      "content-type" : "application/json"
    }
    
  })
  
  result = await result.json()
  if(result.email){
    console.log(result)
    navigate('/')
  }else{
    alert('User Not Found')
  }
     
  
  
  
 }
    
  return (
    <>
    {
        show==false?
        <div className="outer-signup">
        <div className="inner-signup">
            <ul className="signup-ul">
                <button onClick={()=>logFunc()}>login</button>
                <button  onClick={()=>signFunc()}>signup</button>
            </ul>
            <div className='signup-content'>
            <h2 className="heading">Create Your Account</h2>
       
       <input
         className="inputBox"
         type="text "
         value={name}
         onChange={(e) => setName(e.target.value)}
         placeholder="Enter name"
       />
       <input
         className="inputBox"
         type="text "
         value={email}
         onChange={(e) => setEmail(e.target.value)}
         placeholder="Enter email"
       />
        <input
         className="inputBox"
         type="tel"
         value={mobile}
         onChange={(e) => setMobile(e.target.value)}
         placeholder="Enter contact number "
       />
       <input
         className="inputBox"
         type="text"
         value={password}
         onChange={(e) => setPassword(e.target.value)}
         placeholder="Enter password"
       />
       <input className="inputBox"
         type="text"
         value={address}
         onChange={(e) => setAddress(e.target.value)}
         placeholder="Enter address"
       />
       <button className="signinButton" type="button" onClick={()=>registerFunc()} >
         signup
       </button>
       <p className='Link'>
        <Link to="/" >skip registration </Link>{" "}
       </p>
            </div>
        </div>
     </div>
     :
     <div  className="outer-signup">
    <div className="inner-signup">
    <ul className="signup-ul">
                <button onClick={()=>logFunc()}>login</button>
                <button  onClick={()=>signFunc()}>signup</button>
            </ul>
    <h2 className='heading2'>Login into Your Account</h2>
      <input
        className="inputBox2"
        type="text "
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="enter email"
      />
       

      <input
        className="inputBox2"
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="enter password" 
         
        />

      <button className="signinButton2" type="button" onClick={()=>loginFunc()} >Login & Countinue</button>
     <div  className='Link'><p><Link to='/'>Skip Login</Link></p></div> 
      </div>
    </div>
    }
    
    </>
 
  )
}

export default Signup