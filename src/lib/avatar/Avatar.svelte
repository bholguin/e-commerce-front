<script lang="ts">
    import { Avatar, Dropdown, DropdownHeader, DropdownItem } from 'flowbite-svelte';
    import type { User } from '../../types';
    export let user: User
    export let logout: () => void ;
  </script>
  
  <Avatar id="user-drop" class="cursor-pointer" dot={{ color: 'green' }} />
  <Dropdown triggeredBy="#user-drop" >
    <DropdownHeader>
      <span class="block text-sm">{user.username}</span>
    </DropdownHeader>
    <DropdownItem on:click={logout}>Sign out</DropdownItem>
  </Dropdown>