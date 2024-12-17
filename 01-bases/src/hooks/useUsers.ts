import { useEffect, useState } from 'react';
import { User } from '../interfaces/reqres.response';
import { loadUsersAction } from '../actions/load-users.action';

export const useUsers = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        loadUsersAction(page)
            .then(users => setUsers(users));

    }, [page]);

    const nextPage = () => {
        if (users.length === 0) return;
        
        if (users.length > 0){
            setPage(page + 1);
        }
    }

    const previousPage = () => {
        if (page > 1){
            setPage(page - 1);
        }
    }

    return {
        users,
        page,

        nextPage,
        previousPage,
    }
}
