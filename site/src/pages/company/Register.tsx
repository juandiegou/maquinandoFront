import { Button } from '../../components/primitives/Button';
import { Card } from '../../components/Card';
import { Input } from '../../components/primitives/Input';
import { useState } from 'react';
import makeRequest from '../../api/request';

interface Company{
    id?: number
    name: string
}

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

interface RegisterProps {
    onSave?: () => void;
    employes?: User[];
    loading?: boolean;
    newCompany?: Company;
    setNewCompany: React.Dispatch<React.SetStateAction<Company>>;
    isEdit?: boolean
}

export default function Register({onSave,employes,loading,newCompany,setNewCompany,isEdit}: RegisterProps) {
    const [addEmployed, setAddEmpoyed]= useState(false)

    const onAction=(empId:number)=>{
    alert(newCompany?.id)
       if (newCompany?.id !== undefined) {
           if(empId !== null){
                makeRequest.post(`companies/${newCompany.id}/employes/${empId}`).then(() => {
                alert("empleado añadido")
                })
           } 
       }
        alert(empId)

    }
    return (
        <div className='py-1 px-6 bg-background md:flex md:items-center sm:max-h-fit md:max-h-fit lg:max-h-fit xl:max-h-fit 2xl:max-h-fit'>
            <Card className=' border px-10 py-2 md:py-10 bg-backgroundDark h-full md:h-fit w-full md:w-[40%] rounded-none md:rounded-md mx-auto'>
                <h3 className='mb-1 self-start'>{isEdit ? 'Edición de Empresa' : 'Registro Empresa'}a</h3>
                <Input
                    name='name'
                    label='Nombre'
                    placeholder='Ingrese el nombre '
                    value={newCompany?.name || ''}
                    onChange={(e) => {

                        setNewCompany({...newCompany, name: e.target.value})
                    }}
                />
                <>              
                
                    {
                        isEdit && (
                            <div>
                                <Button 
                                        className='bg-yellow-300 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded
                        transition-all duration-[0.2s] active:scale-[0.95] w-full'
                                    onClick={() => setAddEmpoyed(!addEmployed)}
                                >{ addEmployed ? "Cerrar" : "Agregar empleado" }</Button>
                                <>                
                                {
                                    
                                    addEmployed && employes?.map((employee, index) => (
                                        <div key={index} className="relative flex flex-col rounded-lg bg-white shadow-sm border border-slate-200">
                                            <nav className="flex min-w-[240px] flex-col gap-1 p-1.5">
                                                <button
                                                    className="text-slate-800 flex w-full items-center rounded-md p-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 cursor-pointer"
                                                    onClick={() => employee.id !== undefined && onAction(employee.id)}
                                                >

                                                
                                                    <p>{employee.name} {employee.lastName}</p>
                                                </button>
                                            </nav>
                                        </div>

                                    ))
                                }
                                </>
                            </div>
                        )
                    }
                </>
                

                <Button
                    disabled={loading}
                    className='mt-3'
                    onClick={onSave || (() => {})}
                >
                     {isEdit?'Guardar':'Crear'}
                </Button>
            </Card>
        </div>
    );
}