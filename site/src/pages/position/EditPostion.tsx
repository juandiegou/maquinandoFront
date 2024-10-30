import { useNavigate, useParams } from 'react-router-dom'
import Register from './Register'
import { useEffect, useState } from 'react'
import makeRequest from '../../api/request'

interface Position {
    id?: string,
    position: string,
}


export default function EditPostion() {
    const { id } = useParams<{ id: string }>()
    const navigate = useNavigate()
    const [newPosition, setNewPosition] = useState<Position>({
        id: '',
        position: '',
    })

    useEffect(() => {
        makeRequest.get(`positions/${id}`).then((res)=>{
            setNewPosition(res.data)
        })
    }, [])


    const onSave = ()=>{
        makeRequest.put(`positions/${id}`,newPosition).then((res)=>{
            console.log(res.data)
            navigate('/positions')
        })

    }
    

    return (
        
        <Register 
            onSave={onSave } 
            loading={false} 
            newPosition={newPosition} 
            setNewPosition={setNewPosition} 
        />
    )
}