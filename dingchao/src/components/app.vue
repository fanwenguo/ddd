<template>
        <div>
          <dl  
            v-for="(i,index) in data"
            :key="index">
            <dt>
              <input type="checkbox" id="checkbox" v-model="checked" @change="check">
              <img v-bind:src='i.img' alt=""/>
            </dt>
            <dd>
              <h3>{{i.text}}</h3>
              <p>{{i.addr}}</p>
              <p>{{i.name}}</p>
              <p class="price">
                <span>￥{{i.price}}</span>
                <span class="change">
                  <button @click="minus">-</button>
                  <input type="text" id="text" :value="i.num">
                  <button @click="add">+</button>
                </span>
              </p>
            </dd>
          </dl>
          <div class="foot">
            <span class="all">
              <input type="checkbox" id="checkbox" v-model="checked" >
              合计:￥<i></i>
            </span>
            <span class="num">结算</span>
          </div>
        </div>
</template>

<script>
  export default {
    name:"app",
    data(){
        return {
          data:[],
          checked:null,
          
        }
    },
    beforeCreate(){
        this.$ajax({
          url:"/api",
          type:"get"
        }).then((data)=>{
          this.data=data;
          
        })
    },
   methods:{
     add(num){  
       this.data.forEach((x,y)=>{
         console.log(x);
        
       })
     },
     minus(){
       
     },
     check(){
       console.log(this.checked)
     }
   }
  }
</script>