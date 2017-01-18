import axios from 'axios'
import apiKey from './src/steamKey'

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

class SteamAPIClient extends APIClient {
  getUserID (params) {
    return this.get('/ISteamUser/ResolveVanityURL/v0001/', params)
  }

  getUserGames (vanityUrl) {
    return this.getUserID({
      vanityUrl
    }).then((steamResp) => {
      return this.get('/IPlayerService/GetOwnedGames/v0001/', {
        steamid: steamResp.response.steamid,
        include_appinfo: 1
      })
    })
  }
}

let steamClient = new SteamAPIClient({
  baseURL: 'https://api.steampowered.com',
  withCredentials: true,
  params: {
    key: apiKey,
    format: 'json'
  }
})

export default steamClient
