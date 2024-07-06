import type { User } from '../types.js';

export async function load({ fetch }) {
    const response = await fetch("http://localhost:3000/api/user", {
        credentials: 'include',
    });
    const data: User = await response.json();
    return {
        isLogged: response.status === 200 ? true : false,
        user: data
    };
}