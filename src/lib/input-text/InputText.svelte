<script lang="ts">
    import type { HTMLInputTypeAttribute } from "svelte/elements";

    export let label: string = "";
    export let placeholder: string | undefined = undefined;
    export let name: string = "";
    export let required: boolean = false
    export let disabled: boolean = false;
    export let type: HTMLInputTypeAttribute | null | undefined = "text"
</script>

<div class="w-full">
    <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
    <input type={type} name={name} id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" disabled={disabled} placeholder={placeholder} required={required}/>
</div>