export const actions = {
    deleteProduct: async ({request, fetch}) => {
        const data = await request.formData()
        await fetch("http://localhost:3000/api/product/" + data.get("id"), {
            method: "delete",
            credentials: "include",
        });
    }
};