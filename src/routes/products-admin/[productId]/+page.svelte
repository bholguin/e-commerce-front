<script lang="ts">
    import { goto } from "$app/navigation";
    import InputText from "$lib/input-text/InputText.svelte";
    import InputTextarea from "$lib/input-textarea/InputTextarea.svelte";
    import { Modal, Button } from "flowbite-svelte";
    let closeProduct = () => goto("/products-admin");
    export let data;
</script>

<form method="POST" >
    <Modal title="Editar Producto" open on:close={closeProduct}>
        <InputText label="Nombre" name="nombre" required value={data.post.name}/>
        <InputTextarea label="Description" name="descripcion" required value={data.post.description}/>
        <InputText label="Precio" type="number" name="precio" required value={data.post.price}/>
        <InputText label="Stock" type="number" name="stock" required value={data.post.stock}/>
        <svelte:fragment slot="footer">
            <Button type="submit" color="dark">SAVE</Button>
            <Button type="button" color="alternative" on:click={closeProduct}>CANCEL</Button>
        </svelte:fragment>
    </Modal>
</form>
