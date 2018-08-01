import SpotifyWrapper from './index'
import mockFetch from './mockFetch'

let spotify
beforeEach(() => {
  spotify = new SpotifyWrapper({
    token: 'foo'
  })
  fetch = mockFetch({})
})


describe('spotify.search.artists', () => {
  it('should call fetch function', () => {
    const artists = spotify.search.artists('Michael')
    expect(fetch).toHaveBeenCalledTimes(1)
  })

  it('should call fetch with the correct URL', () => {
    const artists = spotify.search.artists('Michael')
    expect(fetch).toHaveBeenCalledWith("https://api.spotify.com/v1/search?q=Michael&type=artist", {"headers": {"Authorization": "'Bearer foo'"}})

    const artists2 = spotify.search.artists('Elvis')
    expect(fetch).toHaveBeenCalledWith("https://api.spotify.com/v1/search?q=Elvis&type=artist", {"headers": {"Authorization": "'Bearer foo'"}})
  })
})

describe('spotify.search.albums', () => {
  it('should call fetch function', () => {
    const albums = spotify.search.albums('Michael')
    expect(fetch).toHaveBeenCalledTimes(1)
  })

  it('should call fetch with the correct URL', () => {
    const albums = spotify.search.albums('Michael');
    expect(fetch).toHaveBeenCalledWith("https://api.spotify.com/v1/search?q=Michael&type=album", {"headers": {"Authorization": "'Bearer foo'"}})

    const albums2 = spotify.search.albums('Elvis');
    expect(fetch).toHaveBeenCalledWith("https://api.spotify.com/v1/search?q=Elvis&type=album", {"headers": {"Authorization": "'Bearer foo'"}})
  })
})

describe('spotify.search.tracks', () => {
  it('should call fetch function', () => {
    const tracks = spotify.search.artists('Michael')
    expect(fetch).toHaveBeenCalledTimes(1)
  })

  it('should call fetch with the correct URL', () => {
    const tracks = spotify.search.tracks('Michael');
    expect(fetch).toHaveBeenCalledWith("https://api.spotify.com/v1/search?q=Michael&type=track", {"headers": {"Authorization": "'Bearer foo'"}})
  })
})
