<script lang="ts">
    import { goto } from "$app/navigation";
    import { EyeSolid } from "flowbite-svelte-icons";
    import {currency} from "../../helpers/currency"
    import {
        Table,
        TableBody,
        TableBodyCell,
        TableBodyRow,
        TableHead,
        TableHeadCell,
        Button,
    } from "flowbite-svelte";
    import { DateFormat } from "../../helpers/dateFormat";

    const goToDetails = (id: number | undefined) => goto("/orders/"+id)

    export let data
    const {orders} = data 
</script>

<div
    class="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800 flex justify-between items-center"
>
    <h1
        class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
    >
        Ordenes
    </h1>
</div>
<Table shadow>
    <TableHead>
        <TableHeadCell>Numero</TableHeadCell>
        <TableHeadCell>Fecha</TableHeadCell>
        <TableHeadCell>Usuario</TableHeadCell>
        <TableHeadCell>Total</TableHeadCell>
        <TableHeadCell>
            <span class="sr-only">Edit</span>
        </TableHeadCell>
    </TableHead>
    <TableBody tableBodyClass="divide-y">
        {#each orders as item}
            <TableBodyRow>
                <TableBodyCell>#{item.id}</TableBodyCell>
                <TableBodyCell>{DateFormat(item.createAt)}</TableBodyCell>
                <TableBodyCell>{item.user.username}</TableBodyCell>
                <TableBodyCell>{currency.format(item.total) }</TableBodyCell>
                <TableBodyCell tdClass="flex justify-center items-center gap-1 py-2">
                    <Button size="sm" color="alternative" on:click={() => goToDetails(item.id)}><EyeSolid /></Button
                    >
                </TableBodyCell>
            </TableBodyRow>
        {/each}
    </TableBody>
</Table>
<slot />