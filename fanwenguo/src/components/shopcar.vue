<template>
    <div>
        <p>
            <input type="checkbox" id="checkall" @click="checkallitem" v-model="checkall"/>
            <label for="checkall">全选</label>
        </p>
        <shopcaritem :products="products" @update="onUpdate"></shopcaritem>
         <div>
            合计金额:{{money}}
            合计数量:{{num}}
         </div>
    </div>
</template>
<script>
    import axios from 'axios';
    import shopcaritem from './shopcaritem';
    export default {
        data(){
            return {
                name:'shopcar',
                money:0,
                num:0,
                products:null,
                checkall:false
            }
        },
        components:{
            shopcaritem
        },
        mounted(){
            this.getProducts();
        },
        methods:{
            getProducts(){
                axios.get('/products').then((result)=>{
                    this.products = result.data;
                })
            },
            checkallitem(){
                if(!this.checkall){
                    this.products.map((item,index)=>{
                        item.isCheck=true;
                    })
                }else{
                    this.products.map((item,index)=>{
                        item.isCheck=false;
                    })
                }
                this.com();
            },
            onUpdate(){
                let temp  =[];
                this.products.find((item,index)=>{
                    if(item.isCheck == true){
                        temp.push(item);
                    }
                })
                
                if(temp.length == this.products.length){
                    this.checkall = true;
                }else{
                    this.checkall = false;
                }
                this.com();
            },
            com(){
                this.money=0;this.num = 0;
                this.products.map((item,index)=>{
                    if(item.isCheck==true){
                        this.money+= item.price*item.count;
                        this.num +=item.count;
                    }
                })
            }
        }
    }
</script>
<style scoped>
    *{
        margin:0;
        padding:0;
        list-style:none;
    }
    .wrap{
        width:100%;
        height:100%;
    }
    .list{
        width:100%;
        height:100%;
    }
    .list li{
        display:flex;
        justify-content:space-around;
        align-items:center;
        width:100%;
        height:150px;
        border-bottom:1px solid #ccc;
    }
</style>