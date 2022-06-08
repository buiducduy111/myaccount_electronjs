<template>
  <div id="app">
    <div class="banner">
        <h1>GPM Account Manager</h1>
    </div>
    <div class="main-content">
        <div class="main-content__left-menu">
            <LeftMenu/>
        </div>
        <div class="main-content__content">
            <router-view/>
        </div>
    </div>
  </div>
</template>

<script>
  import LeftMenu from './components/LeftMenu'
  
  export default {
    name: 'App',
    components: {
      LeftMenu
    }
  }
</script>
