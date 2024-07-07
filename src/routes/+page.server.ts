import { redirect } from '@sveltejs/kit';
import { API_URL } from '$env/static/private';

export async function load({ fetch }) {
    const response = await fetch(`${API_URL}/products`, {
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
        },
    });

    const data = await response.json();

    return{
        products: data
    }
}

export const actions = {
    logout: async ({ cookies }) => {
        cookies.delete("SessionID", {
            path: "/"
        })
        throw redirect(303, "/login")
    }
};