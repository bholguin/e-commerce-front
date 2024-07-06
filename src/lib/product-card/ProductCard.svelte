<script lang="ts">
    import { Card, Button } from "flowbite-svelte";
    import type { Product, UserOrder } from "../../types";
    import { orders } from "../../store";
    import { browser } from "$app/environment";
    import { onDestroy } from "svelte";
        import {currency} from "../../helpers/currency"
    export let product: Product;
    export let horizontal: boolean | undefined = undefined

    let od: Array<UserOrder> = [];

    const unsubscribe = orders.subscribe((val) => {
        od = val;
        return browser && (sessionStorage.orders = JSON.stringify(val));
    });

    const addProduct = () => {
        $orders = [
            ...$orders,
            {
                product: product,
                amount: 1,
            },
        ];
    };

    onDestroy(unsubscribe);
</script>

<div class="space-y-4">
    <Card horizontal={horizontal}>
        <h5
            class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
            {product.name}
        </h5>
        <p
            class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight"
        >
            {product.description}
        </p>
        <p
            class="mb-3 text-2x1 font-semibold text-gray-700 dark:text-gray-400 leading-tight"
        >
            {currency.format(product.price)}
        </p>
        {#if  !od.find((item) => item.product.id === product.id)}
            <Button color="dark" on:click={addProduct}>Agregar</Button>
        {/if}
    </Card>
</div>
