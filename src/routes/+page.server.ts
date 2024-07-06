import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions = {
    logout: async ({ cookies }) => {
        cookies.delete("SessionID", {
            path: "/"
        })
        throw redirect(303, "/login")
    }
};