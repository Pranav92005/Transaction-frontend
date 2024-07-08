import { useNavigate } from "react-router-dom"
import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/Inputbox"
import { SubHeading } from "../components/Subheading"
import { useState } from "react"
import axios from 'axios';

export const Signin = () => {
  const navigate=useNavigate();
  const[username,setUsername]=useState('');
  const[password,setPassword]=useState('');
  

    return <div className="bg-slate-300 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <Heading label={"Sign in"} />
        <SubHeading label={"Enter your credentials to access your account"} />
        <InputBox placeholder="example@gmail.com" value={username} label={"Email"} onChange={(e)=>{setUsername(e.target.value)}}  />
        <InputBox placeholder=" min six chars" value={password} label={"Password"}  onChange={(e)=>{setPassword(e.target.value)}} />
        <div className="pt-4">
          <Button  onclick={()=>{
            
              if(username===''||password===''){
                alert("Please fill all the fields");
                
              }

      axios.post('https://transaction-backend-4rk4.onrender.com/api/v1/user/signin',{username:username,password:password}).then((res)=>{
              
              const token=res.data.token;
              
                
                localStorage.setItem('token',token);
                localStorage.setItem('email',username);
                

              navigate('/dashboard');
              
            })
            .catch ((error)=> {
              
              alert('Invalid username or password. Please try again.');})

            
          







          }} label={"Sign in"} />
        </div>
        <BottomWarning  label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"} />
      </div>
    </div>
  </div>
}