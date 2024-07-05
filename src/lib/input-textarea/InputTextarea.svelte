<script lang="ts">
    import { Textarea } from 'flowbite-svelte';

    export let label: string = "";
    export let placeholder: string | undefined = undefined;
    export let name: string = "";
    export let id: string = "";
    export let required: boolean = false
    export let disabled: boolean = false;
</script>

<div class="w-full">
    <label for={id} class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
    <Textarea  name={name} id={id} disabled={disabled} placeholder={placeholder} required={required} />
</div>