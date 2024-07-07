<script lang="ts">
    import {
        Navbar,
        NavBrand,
        NavLi,
        NavUl,
        NavHamburger,
        Button,
    } from "flowbite-svelte";
    import { orders } from "../../store";
    import type { NavBarOption, User } from "../../types";
    import Avatar from "$lib/avatar/Avatar.svelte";

    export let isLogged: Boolean = false;
    export let options: Array<NavBarOption> = [];
    export let user: User;
</script>

<Navbar
    let:hidden
    let:toggle
    class="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700 lg:px-16"
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
            <div class="relative flex items-center">
                {#if item.hasOrders && $orders.length > 0}
                    <span
                        class="p-[3px] absolute flex justify-center text-white bg-red-600 rounded-[30%] w-6 p-2 left-[85%] top-1 opacity-70"
                    >
                        {$orders.length}
                    </span>
                {/if}
                <NavLi href={item.route} active={true}>{item.label}</NavLi>
            </div>
        {/each}
        {#if !isLogged}
            <Button size="xs" color="dark" href="/login" active={true}
                >LOG IN</Button
            >
        {:else}
            <Avatar {user} />
        {/if}
    </NavUl>
</Navbar>
