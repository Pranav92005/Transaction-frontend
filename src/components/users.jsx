import { useEffect, useState } from "react"
import { Button } from "./Button"
import axios from "axios";
import {Link} from "react-router-dom";


export const Users = () => {
const [search, setSearch] = useState('');
    // Replace with backend call
    const [users, setUsers] = useState([]);
    const token= "Bearer "+localStorage.getItem('token');
    
    

    useEffect(() => {
axios.get(`http://localhost:3000/api/v1/user/bulk?filter=${search}`,{headers:{Authorization:token}}).then((res)=>{ 
        
        
        setUsers(res.data.user);
        
        
        
})

    },[search]);





    return <>
    <div className="mt-3 ml-28">
        <Link to={'/balance'}> <Button label={" check Balance"} /></Link>
   
    </div>
     
        <div className="font-bold mt-6 text-lg">
            Users
        </div>
       
        <div className="my-2">
            <input type="text"value={search} onChange={(e)=>{setSearch(e.target.value)}} placeholder="Search users..." className="w-full px-2 py-1 border rounded border-slate-200"></input>
        </div>
        <div>
            {users.map(user => <User user={user} />)}
        </div>
    </>
}

function User({user}) {
    return <div className="flex justify-between">
        <div className="flex">
            <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                <div className="flex flex-col justify-center h-full text-xl">
                    {user.firstname[0]}
                </div>
            </div>
            <div className="flex flex-col justify-center h-ful">
                <div>
                    {user.firstname} {user.lastname}
                </div>
            </div>
        </div>

        <div className="flex flex-col justify-center h-ful">
            <Link  to={'/send?id='+user._id+'&name='+user.firstname}><Button label={"Send Money"} /></Link>
            
        </div>
    </div>
}