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

interface Company {
    id?: number
    name: string;
    employes?: User[]
}

interface ListProps {
    companies: Company[],
    onDelete: (id: number) => void
}

export default function List({ companies, onDelete }: ListProps){
    return(
        <div className='container px-5 py-2'>
            {
                companies.length > 0 ? companies.map((v,k)=>{
                    return(
                    <Item 
                        key={k} 
                        className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-md m-5'
                        onDelete={() => v.id !== undefined && onDelete(v.id)}
                        id={v.id}  
                        >
                        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{v.name}</div>
                    </Item> 
                    );
                }):
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