<script lang="ts">
    import { orders } from "../../store";
    import ProductCardOrder from "$lib/product-card-order/ProductCardOrder.svelte";
    import {currency} from "../../helpers/currency"
    import {
        Button,
        Card,
        Table,
        TableBody,
        TableBodyCell,
        TableBodyRow,
    } from "flowbite-svelte";
    import { onDestroy } from "svelte";
    import { browser } from "$app/environment";
    import type { UserOrder } from "../../types";

    let od: Array<UserOrder> = [];

    const unsubscribe = orders.subscribe((val) => {
        od = val;
        return browser && (localStorage.orders = JSON.stringify(val));
    });

    const removeOrder = (productId: number | undefined) => {
        $orders = $orders.filter((item) => item.product.id !== productId);
    };

    const inputAmount = (productId: number | undefined, amount: number) => {
        $orders = $orders.map((item) => {
            return item.product.id === productId ? { ...item, amount } : item;
        });
    };

    $: total = $orders.reduce((acc, val) => {
        return acc + val.amount * val.product.price;
    }, 0);

    onDestroy(unsubscribe);
</script>

<div class="flex flex-col gap-6">
    <h1
        class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
    >
        Lista de deseos
    </h1>
    {#if od.length === 0}
        <p class="text-1x2 font-semibold">No tienes productos en la bolsa</p>
    {:else}
        <div class="flex flex-col md:flex-row justify-between gap-4">
            <div
                class="grid w-full lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-4"
            >
                {#each od as item}
                    <ProductCardOrder
                        userOrder={item}
                        {removeOrder}
                        {inputAmount}
                    />
                {/each}
            </div>

            <Card class="flex flex-col gap-4 h-fit ">
                <h1
                    class="mb-4 text-4 font-semibold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white"
                >
                    Order Preview
                </h1>
                <div>
                    <Table >
                        <TableBody>
                            {#each od as item}
                                <TableBodyRow>
                                    <TableBodyCell tdClass="p-2"
                                        >{item.product.name}</TableBodyCell
                                    >
                                    <TableBodyCell tdClass="p-2"
                                        >{(item.amount)}</TableBodyCell
                                    >
                                    <TableBodyCell tdClass="p-2"
                                        >{currency.format(item.product.price)}</TableBodyCell
                                    >
                                    <TableBodyCell tdClass="p-2"
                                        >{currency.format(item.product.price *
                                            item.amount)}</TableBodyCell
                                    >
                                </TableBodyRow>
                            {/each}
                        </TableBody>
                    </Table>
                    <hr />
                    <div
                        class="flex justify-between p-3 font-semibold text-gray-900 md:text-2xl"
                    >
                        <h1>Total:</h1>
                        <span>{currency.format(total)}</span>
                    </div>
                </div>

                {#if od.length > 0}
                    <div class="flex justify-end">
                        <Button color="dark" class="w-[100px] rigth"
                            >Ordenar</Button
                        >
                    </div>
                {/if}
            </Card>
        </div>
    {/if}

    <hr />
</div>
