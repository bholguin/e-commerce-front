<script lang="ts">
    import NavBar from "$lib/navbar/NavBar.svelte";
    import "../app.css";
    import type { NavBarOption } from "../types";

    export let data;

    let options: Array<NavBarOption> = [
        {
            label: "Home",
            route: "/",
        },
    ];

    if (data.isLogged) {
        if (data.user.isAdmin) {
            options = [
                ...options,
                {
                    label: "Productos",
                    route: "/products-admin",
                },
                {
                    label: "Ordenes",
                    route: "/orders",
                },
                {
                    label: "Mis Ordenes",
                    route: "/my-orders",
                    hasOrders: true,
                },
            ];
        } else {
            options = [
                ...options,
                {
                    label: "Mis Ordenes",
                    route: "/my-orders",
                    hasOrders: true,
                },
            ];
        }
    } else {
        options = [
            ...options,
            {
                label: "Mis Ordenes",
                route: "/my-orders",
                hasOrders: true,
            },
        ];
    }

</script>

<NavBar {options} isLogged={data.isLogged} user={data.user} />
<section class="px-12 py-6">
    <slot />
</section>
