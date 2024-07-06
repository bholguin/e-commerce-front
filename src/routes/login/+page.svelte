<script>
    import InputText from "$lib/input-text/InputText.svelte";
    import { Button, Card } from "flowbite-svelte";
</script>
<section class="w-full flex h-[36rem] justify-center items-center">
    <div class="w-1/3">
        <Card>
            <form method="POST" class="flex flex-col gap-6 items-center">
                <h1 class="text-3xl font-bold whitespace-nowrap dark:text-white">E-Commers</h1>
                <InputText label="Username" name="username" required/>
                <InputText label="Password" name="password" type="password" required/>
                <Button  color="dark" type="submit">LOG IN</Button>
            </form>
        </Card>
    </div>
</section>


