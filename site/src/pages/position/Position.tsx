import { useEffect, useState } from "react";
import { Button } from "../../components/primitives/Button";
import Register from "./Register";
import makeRequest from "../../api/request";
import List from "./List";

interface Position{
  position:string;
}


export default function Position() {
  const [showNewPosition, setShowNewPosition] = useState(false);
  const [loading,setLoading]= useState(false)
  const [positions, setPositions] = useState<Position[]>([]);
  const [newPosition,setNewPosition] = useState({
    position:''
  });

  useEffect(() => {
    makeRequest.get('/positions/').then((res)=>{
        setPositions(res.data)
    });
    
}
, [])

  const onSave =(()=>{
      setLoading(true)
      makeRequest.post("positions/", newPosition).then((res)=>{
          alert("creado")
          setPositions([...positions, res.data])
      })
  })

  const onDelete=((id: number)=>{
      makeRequest.delete(`positions/${id}`).then(()=>{
          alert("Eliminado");
      })
   
  })
  return (
    <div className="container">
    
        <div className="text-4xl font-bold text-center">Cargos</div>
        <div className="grid grid-cols-2 gap-4">
            <div className="col-end-7 col-span-4 px-4">
                <Button 
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
                    onClick={() => setShowNewPosition(!showNewPosition)}>
                        {!showNewPosition?'Nuevo cargo':'Cerrar'}</Button> 
            </div>
        </div>
        {
            showNewPosition && (
                <Register 
                    onSave={onSave} 
                    loading={loading} 
                    newPosition={newPosition} 
                    setNewPosition={setNewPosition}
                />

            )
        }
        <List positions={positions} onDelete={onDelete} />


    </div>
  )
}

