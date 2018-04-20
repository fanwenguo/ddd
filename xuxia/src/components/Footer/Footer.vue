<template>
    <div class="Footer">
        <ul>
            <li>首页</li>
            <li>微淘</li>
            <li>消息</li>
            <li>购物车</li>
            <li>我的</li>
        </ul>
    </div>
</template>

<script>
  export default {
    
  }
</script>
<style scoped>
    .Footer {
        width: 100%;
        height: 1rem;
        text-align: center;
        line-height: 1rem;
    }
    .Footer ul{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center
    }
    .Footer ul li{
      flex:1;
      text-align: center;
      line-height: 1rem;
    }
</style>
