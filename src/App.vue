<template lang="pug">
  .wrapper
    header
      .navbar
       .container
        .navbar-content
          router-link.header-logo(
            to="/"
          ) My project
          .button-burger
            span.line.line-1
            span.line.line-2
            span.line.line-3
          .navbar-list__wrapper
            ul.navbar-list
              li.navbar-item(
                v-for="link in linkMenu"
                :key="link.title"
              )
                router-link.navbar-link(
                  :to="`${link.url}`"
                ) {{ link.title }}
    .content-wrapper
      router-view
    
</template>

<script>
export default {
  data () {
    return {
      linkMenu: [
        { title: 'Home', url: '/' },
        { title: 'Login', url: '/login' },
        { title: 'Registration', url: '/registration' }
      ]
    }
  }
}
</script>>

<style lang="scss">
  *{
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }

  #app{
    padding: 30px;
    background-color: darkgray;
    color: #fff;
  }

  .navbar{
    width: 100%;
    .container{
      width: 100%;
    }

    &-content{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 70px;
      height: 50px;
      border-bottom: 1px solid #000;

      a{
        text-decoration: none;
        color: #000;
        transition: all .3s ease;

        &:hover{
          color: darkgray;
          transition: all .3s ease;
        }
      }
    }

    .navbar-list{
      list-style-type: none;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;

      li{
        &:not(:first-child){
          padding-left: 10px;
        }
      }
    }
  }

  .button-burger{
    display: none;
  }

  // @import url('./src/css/main.scss');
  @import './src/css/main.scss';

  
</style>
