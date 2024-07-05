import { redirect } from '@sveltejs/kit';

export async function load({ fetch }) {
    const response = await fetch("http://localhost:3000/api/products-admin", {
        credentials: 'include',
    });
    console.log(response.status);
    
    if(response.status >= 401 && response.status <= 403) {
        redirect(303, "/login")
    }

    const data = await response.json();
    console.log(data);
    return {
        post: data
    };
}