<template>
    <div>
        <h1>{{msg}}</h1>
        <ul>
            <li>6</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'app',
    data(){
        return{
            msg:"Hello Vue 1222"
        }
    }
}
</script>

<style lang="less">
    html,body{
        margin: 0;
        padding: 0;
    }
    ul{
        display:flex;
        margin: 0;
        padding: 0;
        li{
            list-style:none;
        }
    }
</style>




