<script lang="ts">
    import { Card, Button } from "flowbite-svelte";
    import type { UserOrder } from "../../types";
    import InputText from "$lib/input-text/InputText.svelte";
    import {currency} from "../../helpers/currency"

    export let userOrder: UserOrder;
    export let removeOrder: (productId: number | undefined) => void
    export let inputAmount: (productId: number | undefined, amount: number) => void
    const { product } = userOrder;

    const onInput = (e: any) => {
        const newAmount = e.target.value as number
        inputAmount(product.id, newAmount)
    }

</script>

<div class="space-y-4">
    <Card >
        <div>
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
                {currency.format(product.price)}
            </p>
            <div class="gap-4 flex flex-col justify-center items-end">
                <InputText label="Cantidad:" type="number" bind:value={userOrder.amount} input={onInput}/>
                <Button class="w-[40%]" color="red" on:click={() => removeOrder(product.id)}>Remove</Button>
            </div>
           
        </div>
    </Card>
</div>
