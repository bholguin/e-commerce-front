<script lang="ts">
    import { goto } from "$app/navigation";
    import { EyeSolid, TruckSolid } from "flowbite-svelte-icons";
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
    import { onMount } from "svelte";

    let orders: Array<any> = []

    const load = async () => {
        try {
            const response = await fetch(
                "http://localhost:3000/api/orders",
                {
                    credentials: "include",
                },
            );

            if (response.status >= 401 && response.status <= 403) {
                goto("/login");
            }
            const data = await response.json();
            orders = data;
        } catch (e) {}
    };

    onMount(() => {
        load();
    })
</script>

<caption
    class="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800 flex justify-between items-center"
>
    <h1
        class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
    >
        Ordenes
    </h1>
</caption>
<Table shadow>
    <TableHead>
        <TableHeadCell>Numero</TableHeadCell>
        <TableHeadCell>Fecha</TableHeadCell>
        <TableHeadCell>Usuario</TableHeadCell>
        <TableHeadCell>Total</TableHeadCell>
        <TableHeadCell>Estado</TableHeadCell>
        <TableHeadCell>
            <span class="sr-only">Edit</span>
        </TableHeadCell>
    </TableHead>
    <TableBody tableBodyClass="divide-y">
        {#each orders as item}
            <TableBodyRow>
                <TableBodyCell>{item.id}</TableBodyCell>
                <TableBodyCell>{item.createAt}</TableBodyCell>
                <TableBodyCell>{item.user.username}</TableBodyCell>
                <TableBodyCell>{currency.format(item.total) }</TableBodyCell>
                <TableBodyCell>{item.active}</TableBodyCell>
                <TableBodyCell tdClass="flex justify-center items-center gap-1 py-2">
                    <Button size="sm" color="alternative" ><EyeSolid /></Button
                    ><Button size="sm" color="dark" > <TruckSolid  /></Button>
                </TableBodyCell>
            </TableBodyRow>
        {/each}
    </TableBody>
</Table>
<slot />
