<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
    created(){
        // window.parent.webParam.closeLoading()
        // window.parent.webParam.showIframe()
    },
    beforeCreate(){
      // document.getElementsByTagName('html')[0].style.cssText=`font-size:${parent.webParam.baseSize}px`
      // console.log(document.getElementsByTagName('html'))
    }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  @include wh(100%,100%);
  overflow: scroll;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
