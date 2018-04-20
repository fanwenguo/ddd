<template>
    <div class="home">
        <div class="img">
            <dl 
                v-for="(item,index) in data" 
                :key="index"
                class="dl"
                >
                <dt>
                    <img :src="item.img" alt="">
                </dt>
                <dd>
                    <input type="checkbox" class="checkbox" :checked="item.checked">
                    <h5>{{item.name}}</h5>
                    <span>{{item.price}}</span>
                    <p>
                        <button type="button" @click="click(item,-1)">-</button>
                        <input type="text" :value="item.num" class="text">
                        <button type="button" @click="click(item,+1)">+</button>
                    </p>
                </dd>
            </dl>
        </div>
        <Price :zprice="price"></Price>
    </div>
</template>

<script>
  import Price from './Price'
  export default {
    data(){
        return {
          data:null,
          price:0,
          checked:false
        }
    },
    components: {
        Price
    },
    beforeCreate(){
        this.$http('/api/shopCart').then((data)=>{
            this.data=data.data.data
            this.data.forEach((item,index)=>{
                this.price+=item.num*item.price
            })  
        })
        
    },
    mounted () {
        this.bus.$on('changeCheck',function (checked) {  
            this.checked=checked;
            // this.data.forEach((item,index)=>{
            //     this.price+=item.num*item.price
            // })  
            console.log(this.checked,'8888888888')
        })
        
    },
    methods:{
        click(obj,type){
            const ind=obj.id;
            var p=0;
            this.data.forEach((item,index)=>{
                if(ind===item.id){
                    item.num=item.num+type
                }
                p+=item.num*item.price
            })  
            this.price=p;
        }
    }
  }
</script>
<style scoped>
    .home {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    .img{
        flex:1;
        display: flex;
        flex-direction: column;
    }
    .dl{
        width: 100%;
        height: 120px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .dl dt{
        width: 170px;
        text-align: center;
    }
    .dl dt img{
        width: 100px;
        
    }
    .dl h5{
        line-height: 50px;
    }
    .dl dd{
        flex:1;
        display: flex;
        margin:0;
        flex-direction: column;
        position: relative;
    }
    .checkbox{
        position: absolute;
        left:-160px;
        top:30px;
        width: 16px;
        height: 16px;
    }
    .dl dd  span {
        position: absolute;
        left:30px;
        bottom: 0;
    }
    .dl dd p{
        text-align: right;
        margin-right:10px;
    }
    button{
        width: 20px;
        height: 20px;
        background: #fff;
        border:1px solid #333;
        color:#999;
    }
    .text{
        width: 80px;
        height: 20px;
        border:1px solid #333;
        text-align: center
    }
</style>
