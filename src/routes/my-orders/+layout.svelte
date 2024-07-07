<script lang="ts">
    import { orders } from "../../store";
    import ProductCardOrder from "$lib/product-card-order/ProductCardOrder.svelte";
    import { currency } from "../../helpers/currency";
    import {
        Button,
        Card,
        Table,
        TableBody,
        TableBodyCell,
        TableBodyRow,
        TableHead,
        TableHeadCell,
    } from "flowbite-svelte";
    import { onDestroy, onMount } from "svelte";
    import { browser } from "$app/environment";
    import type { OrderProduct, UserOrder } from "../../types";
    import { EyeSolid } from "flowbite-svelte-icons";
    import { goto } from "$app/navigation";
    import { DateFormat } from "../../helpers/dateFormat";

    export let data;
    const { API_URL, isLogged } = data;

    let od: Array<UserOrder> = [];

    const goToDetails = (id: number | undefined) => goto("/my-orders/" + id);

    const unsubscribe = orders.subscribe((val) => {
        od = val;
        return browser && (sessionStorage.orders = JSON.stringify(val));
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

    const createUserOrder = async () => {
        const data: Array<OrderProduct> = $orders.map((item) => {
            return {
                amount: item.amount,
                price: item.product.price,
                productId: item.product.id as number,
            };
        });

        const req = {
            products: data,
            total: total,
        };
        try {
            await fetch(`${API_URL}/order`, {
                method: "post",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(req),
            });
            await load();
            $orders = [];
        } catch (e) {}
    };

    let user_orders: Array<any> = [];

    const load = async () => {
        try {
            const response = await fetch(`${API_URL}/user-orders`, {
                credentials: "include",
            });
            const data = await response.json();
            user_orders = data;
        } catch (e) {}
    };

    onMount(() => {
        load();
    });

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
                class="grid w-full xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-4"
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
                    <Table>
                        <TableBody>
                            {#each od as item}
                                <TableBodyRow>
                                    <TableBodyCell tdClass="p-2"
                                        >{item.product.name}</TableBodyCell
                                    >
                                    <TableBodyCell tdClass="p-2"
                                        >{item.amount}</TableBodyCell
                                    >
                                    <TableBodyCell tdClass="p-2"
                                        >{currency.format(
                                            item.product.price,
                                        )}</TableBodyCell
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
                    <div
                        class="flex justify-between p-3 font-semibold text-gray-900 md:text-2xl"
                    >
                        <h1>Total:</h1>
                        <span>{currency.format(total)}</span>
                    </div>
                </div>
                <div class="flex flex-col justify-end items-end gap-1">
                    <Button
                        on:click={createUserOrder}
                        color="dark"
                        disabled={!isLogged}
                        class="w-[100px] rigth">Ordenar</Button
                    >
                    {#if !isLogged}
                        <h5 class="text-sm">
                            Debes hacer login para realizar tu orden
                        </h5>
                    {/if}
                </div>
            </Card>
        </div>
    {/if}
    <hr />
    {#if isLogged}
        <h1
            class="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-3xl dark:text-white"
        >
            Historial
        </h1>
        <Table shadow>
            <TableHead>
                <TableHeadCell>Numero</TableHeadCell>
                <TableHeadCell>Fecha</TableHeadCell>
                <TableHeadCell>Total</TableHeadCell>
                <TableHeadCell>
                    <span class="sr-only">Edit</span>
                </TableHeadCell>
            </TableHead>
            <TableBody tableBodyClass="divide-y">
                {#each user_orders as item}
                    <TableBodyRow>
                        <TableBodyCell>#{item.id}</TableBodyCell>
                        <TableBodyCell
                            >{DateFormat(item.createAt)}</TableBodyCell
                        >
                        <TableBodyCell
                            >{currency.format(item.total)}</TableBodyCell
                        >
                        <TableBodyCell
                            tdClass="flex justify-center items-center gap-1 py-2"
                        >
                            <Button
                                size="sm"
                                color="alternative"
                                on:click={() => goToDetails(item.id)}
                                ><EyeSolid /></Button
                            >
                        </TableBodyCell>
                    </TableBodyRow>
                {/each}
            </TableBody>
        </Table>
    {/if}
</div>
<slot />
