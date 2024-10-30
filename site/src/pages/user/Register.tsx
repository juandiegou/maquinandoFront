import { Button } from '../../components/primitives/Button';
import { Card } from '../../components/Card';
import { Input } from '../../components/primitives/Input';
import User from './User';

interface Position{
    position: string
}

interface User {
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
    onSave: () => void;
    positions: Position[];
    loading: boolean;
    newUser: User;
    setNewUser: React.Dispatch<React.SetStateAction<User>>;
    isEdit?: boolean
}

export default function Register({ onSave, positions, loading, newUser, setNewUser,isEdit }: RegisterProps) {
    return (
        <div className='py-1 px-6 bg-background md:flex md:items-center sm:max-h-fit md:max-h-fit lg:max-h-fit xl:max-h-fit 2xl:max-h-fit'>
            <Card className=' border px-10 py-2 md:py-10 bg-backgroundDark h-full md:h-fit w-full md:w-[40%] rounded-none md:rounded-md mx-auto'>
                <h3 className='mb-1 self-start'>{isEdit ? 'Edición de usuraio' : 'Registro Usuario'}</h3>
                <Input
                    name='name'
                    label='Nombre'
                    placeholder='Ingrese su nombre '
                    value={newUser.name}
                    onChange={(e)=>{
                        setNewUser({ ...newUser, name: (e.target as HTMLInputElement).value })
                    }}
                />
                <Input
                    name='lastname'
                    label='lastName'
                    placeholder='Ingrese su apellido'
                    value={newUser.lastName}

                    onChange={(e) => {
                        setNewUser({...newUser, lastName: (e.target as HTMLInputElement).value})
                    }}
                />
                <Input
                    name='dni'
                    label='dni'
                    placeholder='Ingrese su dni'
                    value={newUser.dni}
                    onChange={(e) => {
                        setNewUser({...newUser, dni: (e.target as HTMLInputElement).value})
                    }}
                />
                <Input
                    name='cedula'
                    label='cedula'
                    placeholder='Ingrese su cedula'
                    value={newUser.cedula}
                    onChange={(e) => {
                        setNewUser({...newUser, cedula: (e.target as HTMLInputElement).value})
                    }}
                />
                <Input
                    name='address'
                    label='Dirección'
                    placeholder='Ingrese su dirección'
                    value={newUser.address}
                    onChange={(e) => {
                        setNewUser({...newUser, address: (e.target as HTMLInputElement).value})
                    }}
                />
                <Input
                    name='salary'
                    label='salary'
                    placeholder='Ingrese su salario'
                    value={newUser.salary?newUser.salary:''}
                    type='number'
                    onChange={(e) => {
                        setNewUser({...newUser, salary: (e.target as HTMLInputElement).value})

                    }}
                />
                <label className='bg-background text-gray-400 text-sm rounded-lg block w-full'>Seleccione su cargo</label>
                <select 
                className='bg-background
                    text-gray-400 text-sm 
                    rounded-lg
                    block w-full p-3
                    focus:border focus:border-blue-700 focus:outline-none 
                    focus:ring-blue-700
                    border

                    '
                    required
                    name='position'
                    defaultValue={newUser.position}
                    onChange={(e) => {
                        setNewUser({...newUser, position:(e.target as HTMLSelectElement).value })
                    }}
                >

                    <option value="null" disabled>Seleccione su cargo</option>
                    <>                    
                        {
                            positions.map((v: any, k: number) => (
                                <option key={k} value={`${v.position}`}>{v.position}</option>
                            ))
                        }
                    </>

               </select>


                <Button
                    disabled={loading}
                    className='mt-3'
                    onClick={onSave}
                >
                   {isEdit?'Guardar':'Crear'} 
                </Button>
            </Card>
        </div>
    );
}