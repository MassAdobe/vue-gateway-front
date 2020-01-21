<template>
    <div id="app">
        <Login/>
    </div>
    </div>
</template>
<script>
    import Login from './components/Login.vue';
    // import {reqTestGet} from './api/index';

    export default {
        name: 'App',
        data() {
            return {}
        },
        components: {
            Login
        },
        // async mounted() {
        //     // const result = await reqTestGet();
        //     // console.log(result);
        // }
    }
</script>


<style>

</style>
