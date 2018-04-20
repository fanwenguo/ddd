<template>
    <div>
       <p>{{name}}</p>
       <input type="text" placeholder="bitch" @keyup.13="change"/>//可以输键值也可以数贱命
        <p><input type="text" value="2" v-model="name"></p>
       <p>v-model 会忽略所有表单元素的 value、checked、selected 特性的初始值。</p>
    </div>
</template>

<script>
  export default {
    data(){
        return {
             name:"表单",
        }
    },
    methods:{
        change(){
            console.log("回车键");
        }
    }

  }
</script>
<style scoped>
  
</style>