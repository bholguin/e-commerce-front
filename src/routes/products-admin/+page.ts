export async function load({ params }) {
    const response = await fetch("http://localhost:3000/api/products", {
        credentials: 'include',
    });
    const data = await response.json();
    console.log(data);
    return {
        post: data
    };
}