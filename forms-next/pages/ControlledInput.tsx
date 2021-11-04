import * as React from "react"
import { useState } from "react"

export default function ControlledInput(){
    // const [allUsers, setAllUsers] = useState([])
    // const [user, setUser] = useState("")

    // async function fetchUsers(): Promise<void> {
    //     const res = await fetch('/api/users')
    //     const result = await res.json()
    //     setAllUsers(result)

    // }

    // async function createUser(e: any):Promise<void>{
    //     e.preventDefault()
    //     const res = await fetch('/api/users', {
    //         body: JSON.stringify({
    //             user
    //         }),
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         method: 'POST'

    //     })

    //     const result = await res.json();
    //     console.log(result)
    //     allUsers.push(result)
    //     setUser('')
    // }
    // return(
    //     <div>
    //         <form onSubmit={createUser}>
    //             <input type="text" value={user} onChange={(e)=>setUser(e.target.value)}/>
    //             <button type="submit" onClick={fetchUsers}>Register</button>
    //         </form>
    //         {allUsers.map((user, key) =>{
    //             return (<p key={key}>{user.name}</p>)
    //         })}
    //     </div>
    // )
}