import { redirect } from '@sveltejs/kit';
import type { Product } from '../../../types.js';


export const actions = {
    default: async ({request, fetch}) => {
        const data = await request.formData();
console.log(data);

        const product: Product = {
            description: data.get('descripcion') as string,
            name: data.get('nombre') as string,
            price: parseInt(data.get('precio') as string),
            stock: parseInt(data.get('stock') as string),
        }

        const response = await fetch("http://localhost:3000/api/product", {
            method: "post",
            credentials: 'include',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(product),
        });

        if(response.status === 200) throw redirect(303, "/products-admin")

    }
};