import { redirect } from '@sveltejs/kit';
import type { Product } from '../../../types.js';
import { API_URL } from '$env/static/private';

export async function load({ params, fetch }) {
    const response = await fetch(`${API_URL}/product/${params.productId}`, {
        credentials: 'include',
    });
    const data = await response.json();
    return {
        product: data
    };
}

export const actions = {
    default: async ({request, fetch, params}) => {
        const data = await request.formData();

        const product: Product = {
            description: data.get('descripcion') as string,
            name: data.get('nombre') as string,
            price: parseInt(data.get('precio') as string),
            stock: parseInt(data.get('stock') as string),
        }

        const response = await fetch(`${API_URL}/product/${params.productId}`, {
            method: "put",
            credentials: 'include',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(product),
        });

        if(response.status === 200) throw redirect(303, "/products-admin")
    }
};