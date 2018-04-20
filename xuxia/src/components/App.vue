<template>
  <div id="app">
    <Header />
    <section class="section"><Home/></section>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Home
  }
}
</script>

<style>
    *{
      margin: 0;
      padding: 0;
      list-style: none;
    }
    html,body,#app{
      width: 100%;
      height:100%;
    }
    body{
      font-size: .32rem;
    }
    #app{
      display: flex;
      flex-direction: column;
    }
    .section{
      flex:1;
      overflow-y: scroll
    }
</style>
