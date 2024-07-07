import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/Inputbox"
import { SubHeading } from "../components/Subheading"
import { useState } from "react"
import axios from 'axios';
import { useNavigate } from "react-router-dom"

export const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
 const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const navigate=useNavigate();


    return <div className="bg-slate-300 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <Heading label={"Sign up"} />
        <SubHeading label={"Enter your infromation to create an account"} />
        <InputBox placeholder="John" label={"First Name"} value={firstName} onChange={(e)=>{setFirstName(e.target.value)}} />
        <InputBox placeholder="Doe" label={"Last Name"}  value={lastName} onChange={(e)=>{setLastName(e.target.value)}}/>
        <InputBox placeholder="example@gmail.com" label={"Email"} value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
        <InputBox placeholder="min six chars" label={"Password"} value={password} onChange={(e)=>{setPassword(e.target.value)}} />
        <div className="pt-4">
          <Button label={"Sign up"}  onclick={
            ()=>{
              axios.post('http://localhost:3000/api/v1/user/signup',{username:email,firstname:firstName,lastname:lastName,password:password}).then((res)=>{
                
                
                const token=res.data.token;
              
                localStorage.setItem('token',token);
                localStorage.setItem('email',email);
                

                navigate('/dashboard');
              })
              .catch((error)=>{
alert("Please fill all the fields correctly");
              })
         }
          
          }/>
        </div>
        <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"} />
      </div>
    </div>
  </div>
}