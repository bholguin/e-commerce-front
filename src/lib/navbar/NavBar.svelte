<script lang="ts">
    import {
        Navbar,
        NavBrand,
        NavLi,
        NavUl,
        NavHamburger,
    } from "flowbite-svelte";

    export let isLogged: Boolean = false;
    export let options: Array<{
        label: string;
        route: string;
    }> = [];
</script>

<Navbar
    let:hidden
    let:toggle
    class="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
>
    <NavBrand href="/">
        <img
            src="https://flowbite.com/docs/images/logo.svg"
            class="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
        />
        <span
            class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
        >
            E-Commers
        </span>
    </NavBrand>
    <NavHamburger on:click={toggle} />
    <NavUl {hidden}>
        {#each options as item}
            <NavLi href={item.route} active={true}>{item.label}</NavLi>
        {/each}
        {#if !isLogged}
            <NavLi href="/login" active={true}>LOG IN</NavLi>
        {/if}
    </NavUl>
</Navbar>
