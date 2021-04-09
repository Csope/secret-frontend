<template>
    <div class='responseWrapper'>
        <ul class='response'>
            <li v-for="(resdata, res) in response" :key="res">
            {{res}} - {{resdata}}
            </li>
        </ul>
    </div>
</template>
<style>
    .responseWrapper {
        margin-top: 15px;
        background: #eee;
        border-radius: 15px;
    }
    ul {
        padding: 15px;
        list-style: none; /* Remove list bullets */
    }
</style>

<script>

  export default {
    props: { 
        response: '' 
    }

  }
</script>