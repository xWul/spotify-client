import API_URL from './config'
import search from './search'

export default class SpotifyWrapper {
  constructor(options) {
    this.apiURL = options.apiURL || API_URL
    this.token = options.token
    
    this.search = search.bind(this)()
  }

  request(url) {
    const headers = {
      headers: {
        Authorization: `'Bearer ${this.token}'`,
      },
    }

    return window.fetch(url, headers).then(data => data.json())
  }
}
