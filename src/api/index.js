import API_URL from './config'
import search from './search'
import album from './album'
import artist from './artist'

export default class SpotifyWrapper {
  constructor(options) {
    this.apiURL = options.apiURL || API_URL
    this.token = options.token

    this.search = search.bind(this)();  
    this.album = album.bind(this)();
    this.artist = artist.bind(this)();
  }

  request(url) {
    const headers = {
      headers: {
        Authorization: `'Bearer ${this.token}'`,
      },
    }

    return window.fetch(url, headers)
          .then((data) => {
            if (data.status === 401) {
              window.location.href = '/'
            } else {
              return data.json()
            }
          })
  }
}
