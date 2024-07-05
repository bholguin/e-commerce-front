<script>
    import ProductCard from "$lib/product-card/ProductCard.svelte";
    export let data;
</script>

<div class="flex flex-col gap-12">
    <h1
        class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
    >
        Selecciona tus productos
    </h1>

    <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-4">
        {#each data.post as item}
            <ProductCard product={item} />
        {/each}
    </div>
</div>
