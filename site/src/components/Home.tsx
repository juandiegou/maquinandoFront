import { Link } from "react-router-dom";
import { Card } from "./Card";


export default function Home() {
  return (
    <>
        <Card className="container text-blue-900 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-5 py-10">
            <Link className="hover:text-blue-500 font-bold py-2 px-4 rounded
                transition-all duration-[0.2s] active:scale-[0.95]" to="/companies">Empresas</Link>
        </Card>
        <Card className="container text-blue-900 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-5 py-10">
            <Link className="hover:text-blue-500 font-bold py-2 px-4 rounded
                transition-all duration-[0.2s] active:scale-[0.95]" to="/users">Usuarios</Link>
        </Card>
        <Card className="container text-blue-900 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-5 py-10">
            <Link className="hover:text-blue-500 font-bold py-2 px-4 rounded
                transition-all duration-[0.2s] active:scale-[0.95]" to="/positions">Cargos</Link>
        </Card>
    </>
  )
}

