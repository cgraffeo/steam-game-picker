<template>
  <div id="app" class="container-area">
    <mainPage></mainPage>
  </div>
</template>

<script>
import mainPage from './components/MainPage.vue'

export default {
  name: 'app',
  components: {
    mainPage
  }
}
</script>

<style lang="sass" src="./scss/style.scss"></style>
