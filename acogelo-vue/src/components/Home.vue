<template>

    <div class="greetings">
        <h1>¡Bienvenido  <span> {{username}} </span>!</h1>
        <button @click="salir">Salir</button>>
    </div>

</template>


<script>

export default {
    name: "Home",

    data: function(){
        return {
            username: localStorage.getItem('username') || "none"
        };
    },
    
    methods: {
        salir: function(){
            this.$emit("logOut");
        }
    }
}

</script>


<style>
    .greetings{
        margin: 0;
        padding: 0%;
        height: 100%;
        width: 100%;
    
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .greetings h1{
        font-size: 50px;
        color: #283747;
    }

    .greetings span{
        color: crimson;
        font-weight: bold;
    }
</style>