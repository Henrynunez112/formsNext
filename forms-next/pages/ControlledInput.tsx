import * as React from "react"
import { useState } from "react"


export default function ControlledInput(callback: any, initialState = {}){
    const [values, setValues] = useState(initialState)

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setValues({...values, [e.target.name]: e.target.value})
    }

    const onSubmit = async ( e: React.FormEvent<HTMLInputElement>) =>{
        e.preventDefault()
        await callback()
    }

    return {
        onChange,
        onSubmit,
        values
    }
}