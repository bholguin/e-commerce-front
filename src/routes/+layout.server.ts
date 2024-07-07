import type { User } from '../types.js';
import { API_URL } from '$env/static/private';

export async function load({ fetch }) {
    const response = await fetch(`${API_URL}/user`, {
        credentials: 'include',
    });
    const data: User = await response.json();
    return {
        isLogged: response.status === 200 ? true : false,
        user: data
    };
}