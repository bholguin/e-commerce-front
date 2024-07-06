<script lang="ts">
    import { Input, type InputType } from "flowbite-svelte";
    export let label: string = "";
    export let placeholder: string | undefined = undefined;
    export let name: string = "";
    export let id: string = "";
    export let required: boolean = false
    export let disabled: boolean = false;
    export let type: InputType | undefined = "text"
    export let value: string | number | undefined = undefined
    export let input: (e: Event) => void | undefined = () => {}
</script>

<div class="w-full">
    <label for={name} class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
    <Input on:input={input} value={value} type={type} name={name} id={id} disabled={disabled} placeholder={placeholder} required={required} />
</div>