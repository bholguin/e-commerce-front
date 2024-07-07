import { redirect } from '@sveltejs/kit';
import { API_URL } from '$env/static/private';

export async function load({ fetch }) {
    const response = await fetch(`${API_URL}/orders`, {
        credentials: "include",
    });
    
    const data = await response.json();

    if (response.status >= 401 && response.status <= 403) {
        throw redirect(303, "/login");
    }

    return {
        orders: data
    }
}