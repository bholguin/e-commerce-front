<script lang="ts">
    import { goto } from "$app/navigation";
    import {
        Table,
        TableBody,
        TableBodyCell,
        TableBodyRow,
        TableHead,
        TableHeadCell,
        Button,
    } from "flowbite-svelte";

    let creteProduct = () => goto("/products-admin/create");
    export let data;
</script>

<caption
    class="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800 flex justify-between items-center"
>
    <h1
        class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
    >
        Productos
    </h1>
    <Button color="dark" class="h-12" on:click={creteProduct}>CREAR</Button>
</caption>
<Table shadow>
    <TableHead>
        <TableHeadCell>Nombre</TableHeadCell>
        <TableHeadCell>Descripcion</TableHeadCell>
        <TableHeadCell>Stock</TableHeadCell>
        <TableHeadCell>Precio</TableHeadCell>
        <TableHeadCell>
            <span class="sr-only">Edit</span>
        </TableHeadCell>
    </TableHead>
    <TableBody tableBodyClass="divide-y">
        {#each data.post as item}
            <TableBodyRow>
                <TableBodyCell>{item.name}</TableBodyCell>
                <TableBodyCell>{item.description}</TableBodyCell>
                <TableBodyCell>{item.stock}</TableBodyCell>
                <TableBodyCell>${item.price}</TableBodyCell>
                <TableBodyCell>
                    <a
                        href="/products-admin/{item.id}"
                        class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                        >Edit</a
                    > |
                    <a
                        href="/products-admin/{item.id}"
                        class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                        >Remove</a
                    >
                </TableBodyCell>
            </TableBodyRow>
        {/each}
    </TableBody>
</Table>
<slot />
