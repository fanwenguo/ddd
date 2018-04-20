<template>
        <ul class="list">
            <li v-for="(item,index) in products">
                <div class="left">
                    <img :src="item.image"/>
                    <div>
                        <h5>
                            <input type="checkbox" v-model="item.isCheck" @click="checkitem(index)"/>
                            {{item.name}}
                        </h5>
                        <p>{{item.infomation}}</p>
                        <p>{{item.price}}</p>
                    </div>
                   
                </div>
                <div class="right">
                    <button @click="reduce(index)">-</button>
                    <input type="text" v-model="item.count" style="width:20px"/>
                    <button @click="add(index)">+</button>
                </div>
            </li>
        </ul>
</template>
<script>
    export default {
        props:["products"],
        data(){
            return {
            }
        },
        methods:{
            checkitem($index){
                this.products[$index].isCheck = !this.products[$index].isCheck;
                this.$emit('update');
            },
            reduce($index){
                if(this.products[$index].count<=1){
                    return;
                }
                --this.products[$index].count;
                this.$emit('update');
            },
            add($index){
                ++this.products[$index].count;
                this.$emit('update');
            }
        }
       
    }
</script>
<style scoped>
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
    .list li img{
        display:inline-block;
        width:80px;
        height:80px;
        margin-right:10px;
    }
    .left{
        display:flex;
    }
</style>