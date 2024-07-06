
<script lang="ts">
    import {
        Modal,
        Button,
        Table,
        TableBody,
        TableBodyRow,
        TableBodyCell,
    } from "flowbite-svelte";
    import { currency } from "../../helpers/currency";
    import type { OderDetails } from "../../types";
    import { DateFormat } from "../../helpers/dateFormat";

    export let data: OderDetails;
    export let onCancel: () => void
</script>

<Modal title="Detalle de la orden" open on:close={onCancel}>
    <div class="flex gap-4">
        <h1 class="text-xl font-extrabold"># Orden:</h1>
        <span class="text-2xl">{data.order.id}</span>
    </div>
    <div class="flex gap-4">
        <h1 class="text-xl font-extrabold">Usuario:</h1>
        <span class="text-2xl">{data.order.user?.username}</span>
    </div>
    <div class="flex gap-4">
        <h1 class="text-xl font-extrabold">Fecha:</h1>
        <span class="text-2xl">{DateFormat(data.order.createAt)}</span>
    </div>
    <div class="flex gap-4">
        <h1 class="text-xl font-extrabold">Productos:</h1>
    </div>
    <Table>
        <TableBody>
            {#each data.products as item}
                <TableBodyRow>
                    <TableBodyCell tdClass="p-2"
                        >{item.product.name}</TableBodyCell
                    >
                    <TableBodyCell tdClass="p-2">{item.amount}</TableBodyCell>
                    <TableBodyCell tdClass="p-2"
                        >{currency.format(item.product.price)}</TableBodyCell
                    >
                    <TableBodyCell tdClass="p-2"
                        >{currency.format(
                            item.product.price * item.amount,
                        )}</TableBodyCell
                    >
                </TableBodyRow>
            {/each}
        </TableBody>
    </Table>
    <hr />
    <div class="flex gap-4 justify-between px-4">
        <h1 class="text-2xl font-extrabold">Total:</h1>
        <span class="text-2xl">{currency.format(data.order.total)}</span>
    </div>

    <svelte:fragment slot="footer">
        <Button type="button" color="alternative" on:click={onCancel}>CANCEL</Button>
    </svelte:fragment>
</Modal>
