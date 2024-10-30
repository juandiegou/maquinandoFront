import { Button } from "../../components/primitives/Button";
import List from "./List";

import { useEffect, useState } from "react";
import Register from "./Register";
import makeRequest from "../../api/request";

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


export default function User() {
    const [showNewUser, setShowNewUser] = useState(false);
    const [users, setUsers] = useState<User[]>([])
    const [positions, setPositions] = useState([]);
    const [loading,setLoading]= useState(false)
    const [newUser, setNewUser] = useState<User>({
        name: '',
        lastName: '',
        dni: '',
        cedula: '',
        address: '',
        salary: '',
        position: '' 
    });

    useEffect(() => {
        makeRequest.get('/positions/').then((res)=>{
            setPositions(res.data)
        });
        
    }
    , [])

    useEffect(() => {
        makeRequest.get("users/").then((res)=>{
            setUsers(res.data)
        })
    }, [])

    const onSave =(()=>{
        setLoading(true)
        makeRequest.post("users/", newUser).then((res)=>{
            alert("creado")
            setUsers([...users, res.data])
        })
    })

    const onDelete=((id: number)=>{
        makeRequest.delete(`users/${id}`).then(()=>{
            alert("Eliminado");
        })
    })

  return (
    <div className="container">
    
        <div className="text-4xl font-bold text-center">Usuarios</div>
        <div className="grid grid-cols-2 gap-4">
            <div className="col-end-7 col-span-4 px-4">
                <Button 
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
                    onClick=
                        {() => {
                            setShowNewUser(!showNewUser);
                            setNewUser({
                                name: '',
                                lastName: '',
                                dni: '',
                                cedula: '',
                                address: '',
                                salary: '',
                                position: '' 
                            })
                        }

                    }>{!showNewUser?'Agregar Usuario':'Cerrar'}</Button> 
            </div>
        </div>
        {
            showNewUser && (
                <Register 
                    onSave={onSave} 
                    positions={positions} 
                    loading={loading} 
                    newUser={newUser} 
                    setNewUser={setNewUser}
                />

            )
        }
        <List users={users} onDelete={onDelete} />


    </div>
  )
}
