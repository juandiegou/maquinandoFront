import { Item } from '../../components/Item';

interface Position{
    id?:number
    position:string
}

interface ListProps {
    positions: Position[];
    onDelete: (id: number)=>void;
}

export default function List({positions, onDelete}: ListProps){
    return(
        <div className='container px-5 py-2'>
            {
                positions.length>0 ? positions.map((v:Position, k:number)=>{
                    return(
                        <Item 
                            key={k}
                            id={v.id}
                            onDelete={onDelete} 
                            className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-md m-5'>
                            <div className="px-1 uppercase tracking-wide text-sm text-indigo-500 font-semibold">{v.position}</div>               
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