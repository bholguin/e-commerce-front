export async function load({ params, fetch }) {
    const response = await fetch("http://localhost:3000/api/orders", {
        credentials: 'include',
    });
    const data = await response.json();
    console.log(data);
    return {
        post: data
    };
}