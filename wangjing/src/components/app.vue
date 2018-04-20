<template>
    <div class='box'>
      <List 
            v-for="(item, index) in data" 
            :key='index'
            :item='item'
            :list='data'
        >
        </List>
    </div>
</template>

<script>
  import List from './child/shopCart'
  export default {
    name:"app",
    data(){
        return {
          data:[],
          num:1
        }
    },
    beforeCreate(){
        
        this.$ajax({
          url:"/api",
          type:"get"
        }).then((data)=>{
          console.log(data.list)
          this.data=data.list
        })
    },
    components:{
            List
           
        }

  }
</script>
<style>
    .box{
      width:100%;
      height:100%;
      overflow: hidden;
    }
    

</style>