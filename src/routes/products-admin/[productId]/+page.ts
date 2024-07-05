export async function load({ params, fetch }) {
    console.log(params, "params");
    const response = await fetch("http://localhost:3000/api/product/"+params.productId, {
        credentials: 'include',
    });

    const data = await response.json();
    console.log(data);
    return {
        post: data
    };

}