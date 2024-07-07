import { redirect } from '@sveltejs/kit';
import { API_URL } from '$env/static/private';

export const actions = {
    default: async ({ cookies, request, fetch }) => {
        const data = await request.formData();
        const email = data.get('username');
        const password = data.get('password');

        const response = await fetch(`${API_URL}/login`, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: email,
                password: password,
            }),
        });

        if (response.status === 200) {
            const headerCookie = response.headers.get("set-cookie")
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

            throw redirect(303, "/")
        }
    }
};