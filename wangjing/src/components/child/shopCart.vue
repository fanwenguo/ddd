<template>
    <div class="list"> 
        <input type='checkbox' v-on:click="checkBox" value='item.price'/>
        <dl>
            <dt>
                <img v-bind:src='item.img'/>
            </dt>
            <dd>
                <h5>{{item.title}}</h5>
                <span>￥{{item.price}}</span>
                <p><button @click='jian()'>-</button>{{num}}<button @click='add()'>+</button> </p>    
            </dd>
        </dl>
    </div>
</template>
<script>
    export default {
        props:['item', 'list'],
        data(){
            return{
                num :1
            }
        },
        methods:{
            add() {
                console.log(this.num)
                this.num = this.num + 1
            },
            jian() {
                if(this.num <= 1) {
                    this.num = 1;
                } else {
                    this.num--;
                }
                
            },
            checkBox(e){
                if(e.target.checked){
                    console.log(e.target.value)
                }
            }
            
           
        }
    }
</script>
<style scoped>
    .list{
      width:100%;
      height:120px;
      border-bottom:1px solid #ccc;
      padding:10px;
      box-sizing:border-box;
      display:flex;
    }
    .list dl{
      flex:1;
      padding-left:120px;
      position:relative;
    }
    .list input{
      margin:40px 10px;
      width:20px;
      height:20px;
      
    }
    .list dt{
      position:absolute;
      top:0;
      left:10px;
    }
    .list dd h5, .list dd p{
      line-height:30px;
    }
    .list dd p:nth-child(2) span:nth-child(1){
      color:red;
    }
    
</style>
