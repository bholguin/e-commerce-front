<script>
    import NavBar from "$lib/navbar/NavBar.svelte";
    import "../app.css";
    export let data;

    let options = [
        {
            label: "Home",
            route: "/",
        },
    ];

    if (data.post.isLogged) {
        if (data.post.user.isAdmin) {
            options = [
                ...options,
                {
                    label: "Productos",
                    route: "/products",
                },
                {
                    label: "Ordenes",
                    route: "/orders",
                },
            ];
        } else {
            options = [
                ...options,
                {
                    label: "Mis Ordenes",
                    route: "/orders",
                },
            ];
        }
    } else {
        options = [
                ...options,
                {
                    label: "Mis Ordenes",
                    route: "/orders",
                }
            ];
    }
</script>

<NavBar {options} isLogged={data.post.isLogged}/>
<slot />
