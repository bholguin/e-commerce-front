<script>
    import {
        useForm,
        validators,
        HintGroup,
        Hint,
        required,
    } from "svelte-use-form";

    const form = useForm({
        username: {
            initial: "",
            validators: [required],
        },
        password: {
            initial: "",
            validators: [required],
        },
    });

    const login = async () => {
        const response = await fetch("http://localhost:3000/api/login", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: $form.values.username,
                password: $form.values.password,
            }),
        });
        console.log(response.headers);
        document.cookie = response.headers.get("set-cookie") || ''
        const data = await response.json();
        console.log(data);
    };
</script>

<form use:form on:submit|preventDefault={login}>
    <h1>Login</h1>

    <input name="username" />
    <Hint on="required">This is a mandatory field</Hint>

    <input type="password" name="password" />
    <Hint for="password" on="required">This is a mandatory field</Hint>

    <button disabled={!$form.valid}>Login</button>
</form>

<style>
    :global(.touched:invalid) {
        border-color: red;
        outline-color: red;
    }
</style>
