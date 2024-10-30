
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className='container h-screen flex justify-center items-center'>
            <div className="flex flex-col items-center">
                <div className="text-indigo-500 font-bold text-7xl">
                    404
                </div>

                <div className="font-bold text-3xl xl:text-7xl lg:text-6xl md:text-5xl mt-10">
                    This page does not exist
                </div>

                <div className="text-gray-400 font-medium text-sm md:text-xl lg:text-2xl mt-8">
                    The page you are looking for could not be found.
                </div>
                <div className="text-indigo-500 font-bold text-3xl">
                    <Link to={'/'}> Home </Link>
                </div>
        </div>
    </div>
  )
}

