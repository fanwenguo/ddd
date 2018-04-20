<template>
    <div class="Price">
        <p><input type="checkbox" @change="changeBox"> 全选</p>
        <p>合计 <span>{{zprice}}</span></p>
        <button type="button">去结算</button>
    </div>
</template>
<script>
    export default{
        props:['zprice'],
        methods:{
            changeBox(e){
                let checked=e.target.checked;
                this.bus.$emit('changeCheck',checked)
            }
        }
    }
</script>
<style>
    .Price {
        width: 100%;
        height: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    p{
        flex:1;
        text-align: center
    }
    button{
        width:120px;
        height: 1rem;
        background: pink;
        border:none;
        color:#fff;
    }
</style>
