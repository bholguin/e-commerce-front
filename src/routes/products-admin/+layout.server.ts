import { redirect } from '@sveltejs/kit';
import type { Product } from '../../types.js';
import { API_URL } from '$env/static/private';


export async function load({ fetch }) {
    const response = await fetch(`${API_URL}/products-admin`, {
        credentials: "include",
    });

    const data: Array<Product> = await response.json();

    if (response.status >= 401 && response.status <= 403) {
        throw redirect(303, "/login");
    }

    return {
        products: data
    }
}

