import { redirect } from '@sveltejs/kit';

export const actions = {
    default: async ({ cookies, request, fetch}) => {
        console.log(cookies.getAll())
        const data = await request.formData();
        const email = data.get('username');
        const password = data.get('password');

        const response = await fetch("http://localhost:3000/api/login", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: email,
                password: password,
            }),
        });
        const headerCookie = response.headers.get("set-cookie")
        console.log(headerCookie);
        
        const splitCookie = headerCookie?.split(";") as Array<string>
        const cookie = splitCookie[0].split("=") as Array<string>
        let options: any = {
            maxAge: 20 * 60 * 1000,
            httpOnly: true, 
            secure: true,
            sameSite: "None",
            path: "/"
        };
        cookies.set(cookie[0], cookie[1], options)
        const info = await response.json();
        console.log(info);
        throw redirect(303, "/")
        
    }
};