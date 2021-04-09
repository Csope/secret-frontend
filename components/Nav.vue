<template> 
        <div class="links">
            <NuxtLink to="/">Get secret</NuxtLink>|
            <NuxtLink to="/store">Store secret</NuxtLink>
        </div>
</template>

<style>
    .links {
        text-align: center;
        font-size: 1.5em;
        padding: 15px;
        font-weight: 800;
    }
    a {
        color: #222;
        padding: 1.4em;
        text-transform: uppercase;
    }
    a:hover {
        color: #555;
        text-decoration: none;
    }

</style>