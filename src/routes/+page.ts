export async function load({ fetch }) {
    const response = await fetch("http://localhost:3000/api/products", {
        credentials: 'include',
    });

    const data = await response.json();

    return {
        post: data
    };
}