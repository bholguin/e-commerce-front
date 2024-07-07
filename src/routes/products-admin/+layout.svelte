<script lang="ts">
    import { goto } from "$app/navigation";
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
    import {TrashBinSolid, EditSolid} from "flowbite-svelte-icons"

    export let data;
    const {products} = data

    let creteProduct = () => goto("/products-admin/create");
    let goToEdit = (id: number | undefined) => goto("/products-admin/"+id)
</script>

<caption
    class="flex flex-row justify-between items-center p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800"
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
                    >
                    <form method="POST" action="?/deleteProduct">
                        <input type="hidden" name="id" value={item.id}>
                        <Button size="sm" color="dark" type="submit"> <TrashBinSolid  /></Button>
                    </form>
                </TableBodyCell>
            </TableBodyRow>
        {/each}
    </TableBody>
</Table>
<slot />
