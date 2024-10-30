import { Button } from '../../components/primitives/Button';
import { Card } from '../../components/Card';
import { Input } from '../../components/primitives/Input';


interface Position{
    position: string
}


interface RegisterProps {
    onSave: () => void;
    loading: boolean;
    newPosition: Position;
    setNewPosition: React.Dispatch<React.SetStateAction<Position>>;
    isEdit?:boolean
}

export default function Register({ onSave, loading, newPosition, setNewPosition, isEdit }: RegisterProps) {
    return (
        <div className='py-1 px-6 bg-background md:flex md:items-center sm:max-h-fit md:max-h-fit lg:max-h-fit xl:max-h-fit 2xl:max-h-fit'>
            <Card className=' border px-10 py-2 md:py-10 bg-backgroundDark h-full md:h-fit w-full md:w-[40%] rounded-none md:rounded-md mx-auto'>
                <h3 className='mb-1 self-start'>{isEdit ? 'Edición de posicion' : 'Registro posicion'}</h3>

                <Input
                    name='position'
                    label='Nombre'
                    placeholder='Ingrese el nombre del cargo '
                    value={newPosition.position}
                    onChange={(e) => {
                        setNewPosition({...newPosition, position: (e.target as HTMLInputElement).value})
                    }}
                />
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