import { useState } from "react"


const Login=()=>{
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

    const submitHandler=(e)=>{
        e.preventDefault();
        setEmail("")
        setPassword("")
    }

    return(
        <form onSubmit={submitHandler}>
            <div className="flex h-screen w-screen justify-center items-center">
            <div className="border border-emerald-600 p-25 flex-col flex gap-5 rounded-xl   ">
                <input className="border border-emerald-600 rounded-full px-8 py-3  outline-none" type="email" required value={email} placeholder="Email"
                onChange={(e)=>{
                    setEmail(e.target.value)
                }} />
                <input className="border border-emerald-600 rounded-full px-8 py-3  outline-none" type="password" required value={password} placeholder="Password" 
                onChange={(e)=>{
                    setPassword(e.target.value)
                }}/>
                <button className="bg-emerald-400 rounded-xl p-3 cursor-pointer">Login</button>
            </div>
        </div>
        </form>
        
    )
}
export default Login