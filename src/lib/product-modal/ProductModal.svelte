<script lang="ts">
    import InputText from "$lib/input-text/InputText.svelte";
    import InputTextarea from "$lib/input-textarea/InputTextarea.svelte";
import { Modal, Button } from "flowbite-svelte";
    let defaultModal: boolean = true;
</script>

<Modal title="Terms of Service" bind:open={defaultModal}>
    <InputText label="Nombre" required/>
    <InputTextarea label="Description" required/>
    <InputText label="Precio" type="number" required/>
    <InputText label="Stock" type="number" required/>
    <svelte:fragment slot="footer">
        <Button type="submit" color="dark">SAVE</Button>
        <Button type="button" color="alternative">CANCEL</Button>
    </svelte:fragment>
</Modal>
