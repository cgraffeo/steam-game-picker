<template>
  <div id="app">
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

<style lang="sass" serc="./scss/style.scss"></style>
