import { useForm } from "react-hook-form"

interface FormInputs {
    email: string;
    password: string;
}

export const FormsPage = () => {
    const { 
        register,
        handleSubmit,
     } = useForm<FormInputs>({
        defaultValues: {
            email: 'andres@gmail.com',
            password: '123456',
        },
    });

    const onSubmit = (myForm: FormInputs) => {
        console.log({ myForm });
    }

    return (
        <form onSubmit={ handleSubmit(onSubmit) } className="min-w-[400px] w-auto">
            <h3>Formulario</h3>

            <div className="flex flex-col space-y-2">
                <input 
                    className="border border-blue-300 p-2 rounded-xl m-2"
                    type="email"
                    placeholder="email"
                    { ...register('email', { required: true }) }
                />

                <input 
                    className="border border-blue-300 p-2 rounded-xl m-2"
                    type="password"
                    placeholder="password"
                    { ...register('password', { required: true }) }
                />

                <button 
                    type="submit" 
                    className="bg-blue-500 text-white p-2 rounded-xl"
                >
                    Ingresar
                </button>

            </div>

        </form>
    )
}
