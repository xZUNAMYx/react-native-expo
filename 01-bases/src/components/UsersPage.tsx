// import React from 'react'

import { useUsers } from "../hooks/useUsers";
import { UserRow } from "./UserRow"

export const UsersPage = () => {
    const { users, nextPage, previousPage, page } = useUsers();

    console.log(users);

    return (
        <>
            <h3>usuarios:</h3>

            <table className="w-[500px] bg-black rounded-xl text-white">
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>Email</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        users.map( user => (
                            <UserRow key={ user.id } user={ user }/>
                        ))
                    }
                </tbody>
            </table>

            <div className="flex justify-between w-[500px] mt-2">
                <button 
                    onClick={ previousPage }
                    className="p-2 bg-blue-500 text-white rounded-[10px]"
                >
                    Anteriores
                </button>
                
                <span>{ page }</span>

                <button 
                    onClick={ nextPage }
                    className="p-2 bg-blue-500 text-white rounded-[10px]"
                >
                    Siguientes
                </button>
            </div>
        </>
    )
}
