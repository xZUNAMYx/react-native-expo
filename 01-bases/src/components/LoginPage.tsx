import { useAuthContext } from '../context/AuthContext'

export const LoginPage = () => {
    const { isChecking, isAuthenticated, user, loginWithEmailPassword, logout } = useAuthContext();

    if ( isChecking ) {
        return (
            <h3>Loading...</h3>
        )
    }

  return (
    <>
        { isAuthenticated ? (
            <>
                <h3>Bienvenido</h3>

                <pre>{ JSON.stringify( user?.name, null, 2 ) }</pre>

                <button
                    onClick={ () => logout() }
                    className='bg-blue-500 text-white p-2 m-2 rounded-xl'
                >
                    Logout
                </button>
            </>
        ) : (
            <>
                <h3>Ingresar a la aplicación</h3>

                <button 
                    onClick={ () => loginWithEmailPassword('andrews@gmail.com', '123456') }
                    className='bg-blue-500 text-white p-2 m-2 rounded-xl'
                >
                    Login
                </button>
            </>
        )}
    </>
  )
}
