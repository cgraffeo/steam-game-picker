<template>
<div class="main-area">
  <div id="title">
    <h1>Never wonder what game to play again!</h1>
    <h3>Enter your Steam name below.</h3>
  </div>
  <div class="input-area">
    <form id="search-name" @submit.prevent="search">
      <input type="search" placeholder="Enter Diplay name" id="vanityUrl" v-model="vanityUrl">
      <button type="submit" id="search"></button>
    </form>
    <!-- <mdl-text-field label-class="" label="Enter Steam User Name" value="vanityUrl"></mdl-text-field>
    <mdl-button msg="Find me a game to play!" primary></mdl-button> -->
  </div>
  <div id="results" v-text='selectedGame.name'></div>
  <img v-if="selectedGame.name" :src="selectedGameImage" alt="">
</div>
</template>

<script>
import MdlTextField from './mdl/TextField.vue'
import MdlButton from './mdl/Button.vue'
import axios from 'axios'

class APIClient {
  constructor (config) {
    this.client = axios.create(config)
  }

  get (url, params) {
    return this.client.get(url, {params}).then(this.justResp)
  }

  justResp (resp) {
    return resp.data
  }
}

class GameSearchAPI extends APIClient {
  getGamesList (vanityUrl) {
    return this.get(`/user/${vanityUrl}/games`)
  }
}

let gameSearch = new GameSearchAPI({
  baseURL: '//localhost:3010',
  withCredentials: true
})

export default {
  data () {
    return {
      vanityUrl: null,
      prevSearch: null,
      games: []
    }
  },
  name: 'mainPage',
  components: {
    MdlTextField,
    MdlButton
  },
  computed: {
    selectedGame () {
      let totalGames = this.games.length
      return this.games[Math.floor(Math.random() * totalGames)] || {}
    },
    selectedGameImage () {
      let appid = this.selectedGame.appid
      let hash = this.selectedGame.img_logo_url
      return `//media.steampowered.com/steamcommunity/public/images/apps/${appid}/${hash}.jpg`
    }
  },
  methods: {
    search () {
      if (this.games.length && this.prevSearch && this.vanityUrl === this.prevSearch) {
        this.games = [].concat(this.games)
        return
      }

      return gameSearch.getGamesList(this.vanityUrl).then((gameData) => {
        this.prevSearch = this.vanityUrl
        this.games = gameData.response.games
      })
    }
  }
}
</script>

<style lang="sass">
@import "../scss/main"
</style>
