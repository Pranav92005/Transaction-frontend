import { useEffect,useState } from "react";
import axios from "axios";


export default function Balance() {
    const[balance,setBalance]=useState(0);
    useEffect(() => {
        axios.get("http://localhost:3000/api/v1/account/balance" ,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then((res)=>{
        
            setBalance(res.data.balance);
        
        })
    })
  return (
    <div className="mt-52 p-5 bg-slate-300 ">
        <div >
            
            <div className="text-lg font-bold ml-10">your Account balance is rupees  </div>
            <div className="text-2xl font-extrabold ml-28">{Math.floor(balance)}</div>
      </div>
    
      
    </div>
  )
}
