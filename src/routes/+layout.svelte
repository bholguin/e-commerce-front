<script lang="ts">
    import NavBar from "$lib/navbar/NavBar.svelte";
    import { orders } from "../store";
    import "../app.css";
    import type { NavBarOption } from "../types";

    export let data;
    let numOrders = 0;
    orders.subscribe((val) => {
        numOrders = val.length;
    });

    let options: Array<NavBarOption> = [
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

<NavBar {options} isLogged={data.post.isLogged} />
<section class="px-12 pt-4">
    <slot />
</section>
