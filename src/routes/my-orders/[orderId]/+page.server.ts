import type { OderDetails } from '../../../types.js';
import { API_URL } from '$env/static/private';

export async function load({ params, fetch }) {
    console.log(params, "params");
    const response = await fetch(`${API_URL}/order/${params.orderId}`, {
        credentials: 'include',
    });
    const data: OderDetails = await response.json();
    return {
        post: data
    };

}