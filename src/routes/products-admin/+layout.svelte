<script lang="ts">
    import { goto } from "$app/navigation";
    import { onMount } from "svelte";
    import { currency } from "../../helpers/currency";
    import {
        Table,
        TableBody,
        TableBodyCell,
        TableBodyRow,
        TableHead,
        TableHeadCell,
        Button,
    } from "flowbite-svelte";
    import type { Product } from "../../types";
    import {TrashBinSolid, EditSolid} from "flowbite-svelte-icons"

    let products: Array<Product> = [];

    let creteProduct = () => goto("/products-admin/create");
    let goToEdit = (id: number | undefined) => goto("/products-admin/"+id)
    const load = async () => {
        try {
            const response = await fetch(
                "http://localhost:3000/api/products-admin",
                {
                    credentials: "include",
                },
            );
            const data = await response.json();
            products = data;
        } catch (e) {
            console.log(e);
        }
    };

    const removeProduct = async (id: number | undefined) => {
        try {
            await fetch("http://localhost:3000/api/product/" + id, {
                method: "delete",
                credentials: "include",
            });
            await load();
        } catch (e) {}
    };

    onMount(() => {
        load();
    });
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
        {#each products as item}
            <TableBodyRow>
                <TableBodyCell>{item.name}</TableBodyCell>
                <TableBodyCell>{item.description}</TableBodyCell>
                <TableBodyCell>{item.stock}</TableBodyCell>
                <TableBodyCell>{currency.format(item.price)}</TableBodyCell>
                <TableBodyCell tdClass="flex justify-center items-center gap-1 py-2">
                    <Button size="sm" color="alternative" on:click={() => goToEdit(item.id)}><EditSolid /></Button
                    ><Button size="sm" color="dark" on:click={() => removeProduct(item.id)}> <TrashBinSolid  /></Button>
                </TableBodyCell>
            </TableBodyRow>
        {/each}
    </TableBody>
</Table>
<slot />
