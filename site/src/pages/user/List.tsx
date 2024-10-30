import { Item } from '../../components/Item';

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

interface ListProps {
    users: User[];
    onDelete: (id: number) => void;
}

export default function List({ users, onDelete }: ListProps){
     

    return(
        <div className='container px-5 py-2'>
                {users.length > 0 ? users.map((v: User, k: number) => {
                    return (
                        <Item 
                            key={k} 
                            className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-md m-5'
                            onDelete={() => v.id !== undefined && onDelete(v.id)}
                            id={v.id}    
                            >
                            <div className="grid grid-flow-col auto-cols-max">
                                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{v.name}</div>
                                <div className="px-1 uppercase tracking-wide text-sm text-indigo-500 font-semibold">{v.lastName}</div>               
                            </div>
                            <p className="block mt-1 text-lg leading-tight font-medium text-black">{v.dni}</p>
                            <p className="mt-2 text-gray-500">{v.cedula}</p>
                            <p className="mt-2 text-gray-500">{v.address}</p>
                            <p className="mt-2 text-gray-500">{v.salary}</p>
                            <p className="mt-2 text-gray-500">{v.position}</p>
                            <p className="mt-2 text-gray-500">{v.creationDate ? new Date(v.creationDate).toLocaleDateString() : 'N/A'}</p> 
                        </Item>
                    );
                }) :
                (
                    <div className='container max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-md m-5'>
                        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                            Sin registros
                        </div>
                    </div>
                )
            
                }

                
           
                
        </div>
    );
}