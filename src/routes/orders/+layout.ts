import { redirect } from '@sveltejs/kit';


export async function load({ fetch }) {
    const response = await fetch("http://localhost:3000/api/validate", {
        credentials: 'include',
    });

    if (response.status >= 401 && response.status <= 403) {
        throw redirect(303, "/login");
    }    
}