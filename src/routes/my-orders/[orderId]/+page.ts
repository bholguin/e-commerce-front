import type { OderDetails } from '../../../types.js';

export async function load({ params, fetch }) {
    console.log(params, "params");
    const response = await fetch("http://localhost:3000/api/order/"+params.orderId, {
        credentials: 'include',
    });

    const data: OderDetails = await response.json();
    console.log(data);
    return {
        post: data
    };

}