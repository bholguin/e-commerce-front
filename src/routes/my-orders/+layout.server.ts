import { API_URL } from '$env/static/private';

export async function load() {
    
    return {
        API_URL: API_URL
    };
}