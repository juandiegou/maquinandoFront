import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "./primitives/Button";

interface Props {
    children?: React.ReactNode;
    className: string;
    onDelete?: (id: number) => void;
    id?: number;
}

export function Item({ children, onDelete, id }: Props) {

    const navigate = useNavigate()
    const location = useLocation();

    return (
        <div className="container max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-5">
            <div className="p-8">
                {/* <div className="grid grid-flow-col auto-cols-max">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">pepito</div>
                    <div className="px-1 uppercase tracking-wide text-sm text-indigo-500 font-semibold">perez</div>               
                </div>
                <p className="block mt-1 text-lg leading-tight font-medium text-black">1231818</p>
                <p className="mt-2 text-gray-500">9292929299</p>
                <p className="mt-2 text-gray-500">Calle 33</p>
                <p className="mt-2 text-gray-500">1000000</p>
                <p className="mt-2 text-gray-500">Gerente</p>
                <p className="mt-2 text-gray-500">23 de Noviembre del 2024</p> */}
                {children}


                <div className="grid grid-flow-col auto-cols-max p-2">
                    
                    
                    <Button 
                        className="bg-red-300 hover:bg-red-500 mx-2"
                        onClick={() => { if (onDelete && id !== undefined) onDelete(id); }}>
                       Borrar
                    </Button>
                    <Button 
                        className="bg-yellow-300 hover:bg-yellow-500 mx-2"
                        onClick={() => { 
                            if (id !== undefined) {
                                navigate(`${location.pathname}/edit/${id}`);
                            }
                        }}>
                       Editar
                    </Button>
                </div>    
            </div>
        </div>
    );
}
