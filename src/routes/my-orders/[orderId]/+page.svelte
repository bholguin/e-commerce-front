<script lang="ts">
    import { goto } from "$app/navigation";
    import OrderDetails from "$lib/order-details/OrderDetails.svelte";
    let closeOrder = () => goto("/my-orders");
    export let data;
</script>

<OrderDetails data={data.post} onCancel={closeOrder}/>