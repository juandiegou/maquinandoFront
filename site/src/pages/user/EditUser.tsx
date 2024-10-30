import { useParams, useNavigate } from 'react-router-dom'
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

export default function EditUser() {
    const { id } = useParams<{ id: string }>()
    const navigate = useNavigate()
    const [positions, setPositions]= useState([])
    const [newUser, setNewUser]= useState<User>({
        name: '',
        lastName: '',
        dni: '',
        cedula: '',
        address: '',
        salary: '',
        position: ''
    })
   


    useEffect(() => {
        makeRequest.get("positions/").then((response) => {
            setPositions(response.data);
        })
    }, [])

    useEffect(() => {
      makeRequest.get(`users/${id}`).then((res)=>{
        setNewUser(res.data);
      })
    }, [])

    const onSave = ()=>{
        console.log(newUser)
        makeRequest.put(`positions/${id}`,newUser).then((res)=>{
            console.log(res.data);
            navigate('/users')
        })
    }
    
    
    return (
        <>
            <Register 
                isEdit={true}
                onSave={onSave} 
                positions={positions} 
                loading={false} 
                newUser={newUser} 
                setNewUser={setNewUser} 
            />
        </>
    )
}