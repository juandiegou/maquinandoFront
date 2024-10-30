import {  useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import makeRequest from '../../api/request'
import Register from './Register'


interface User {
    id?: number,
    name: string, 
    lastName: string,
    dni: string,
    cedula: string,
    address: string,
    salary: string, 
    position: string,
    creationDate?: string 
}

interface Company{
    id?:number
    name: string
}

export default function EditCompany() {
    const { id } = useParams<{ id: string }>()
    const navigate = useNavigate()
    const [newCompany,setNewCompany]= useState<Company>()
    const [employes, setEmployes] = useState<User[]>()

    useEffect(() => {
        makeRequest.get(`companies/${id}`).then((res)=>{
            setNewCompany(res.data)
        })
    }, [])

    useEffect(() => {
        makeRequest.get("users/").then((res)=>{
            setEmployes(res.data)
        })
    }, [])
    

    const onSave= ()=>{
        makeRequest.put(`companies/${id}`,newCompany).then((res)=>{
            console.log(res.data)
            navigate('/companies')
        })
    }
    
    return (    
        <>
            <Register
                isEdit={true}
                onSave={onSave}
                employes={employes}
                loading={false}
                newCompany={newCompany}
                setNewCompany={setNewCompany}
            />
        </>
    )
}
