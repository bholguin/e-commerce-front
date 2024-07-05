export async function load({fetch}) {
    const response = await fetch("http://localhost:3000/api/user", {
        credentials: 'include',
    });
    console.log(response.status)
    const data = await response.json();
    console.log(data, "data user");
    return {
        post: {
            isLogged: response.status === 200 ? true : false, 
            user: data
        }
    };
}