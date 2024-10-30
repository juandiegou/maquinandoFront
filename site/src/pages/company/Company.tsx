import { useEffect, useState } from 'react'
import makeRequest from '../../api/request'
import List from './List';
import { Button } from '../../components/primitives/Button';
import Register from './Register';

interface User {
  id?: number
  name: string, 
  lastName: string,
  dni: string,
  cedula: string,
  address: string,
  salary: string, 
  position: string,
  creationDate?: string 
}

interface Company {
  id?: number,
  name: string
}

export default function Company() {
  const [companies, setcompanies] = useState<Company[]>([]);
  const [employes, setEmployes] = useState<User[]>([]);
  const [showNewCompany, setShowNewCompany] = useState(false);
  const [newCompany, setNewCompany] = useState<Company>({
    name: ''
  });
  const [loading,setLoading] = useState(false)


  useEffect(() => {
    makeRequest.get("companies/").then((resp) => {
      setcompanies(resp.data);
    })
  }, [])

  useEffect(() => {
    makeRequest.get("users/").then((resp) => {
      setEmployes(resp.data);
    })
  }, [])
  
  const onSave =(()=>{
      setLoading(true)
      makeRequest.post("companies/", newCompany).then((res)=>{
        setcompanies([...companies, res.data])
        alert("Guardado")
      })
  })

  const onDelete=((id: number)=>{
      makeRequest.delete(`companies/${id}`).then(()=>{
          alert("Eliminado");
      })
  })


  return (
    <div className='container'>
      <div className="text-4xl font-bold text-center">Empresas</div>
        <div className="grid grid-cols-2 gap-4">
            <div className="col-end-7 col-span-4 px-4">
                <Button 
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
                    onClick=
                        {() => {
                            setShowNewCompany(!showNewCompany);
                            setNewCompany({
                                name: '' 
                            })
                        }

                    }>{!showNewCompany?'Agregar Empresa':'Cerrar'}</Button> 
            </div>
        </div>
        {
            showNewCompany && (
                <Register 
                    onSave={onSave} 
                    employes={employes} 
                    loading={loading} 
                    newCompany={newCompany} 
                    setNewCompany={setNewCompany}
                />

            )
      }

      <List companies={companies} onDelete={onDelete} />
    </div>
  )
}