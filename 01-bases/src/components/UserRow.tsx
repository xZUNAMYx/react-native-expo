import { User } from "../interfaces/reqres.response"

interface UserRowProps {
    user: User;
}

export const UserRow = ({ user }: UserRowProps) => {
    return (
        <tr className="p-2">
            <td>
                <img
                    src= { user.avatar }
                    className="rounded-full w-14 p-2"
                    alt= "User avatar"
                />
            </td>
            <td>
                { user.first_name } { user.last_name }
            </td>
            <td>
                { user.email }
            </td>
        </tr>
    )
}
