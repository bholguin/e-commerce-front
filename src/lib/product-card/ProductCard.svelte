<script lang="ts">
    import { Card, Button } from "flowbite-svelte";
    import type { Product } from "../../types";
    export let product: Product;
</script>

<div class="space-y-4">
    <Card img="">
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
            ${product.price}
        </p>
        <Button color="dark">Agregar</Button>
    </Card>
</div>
