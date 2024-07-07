<script lang="ts">
  import {
    Avatar,
    Dropdown,
    DropdownHeader,
    DropdownItem,
  } from "flowbite-svelte";
  import type { User } from "../../types";
  export let user: User;
</script>

<Avatar id="user-drop" class="cursor-pointer" dot={{ color: "green" }} />
<Dropdown triggeredBy="#user-drop">
  <DropdownHeader>
    <span class="block text-sm">{user.username}</span>
  </DropdownHeader>
  <form method="post" action="?/logout">
    <button type="submit" ><DropdownItem>Sign out</DropdownItem></button>
  </form>
</Dropdown>
