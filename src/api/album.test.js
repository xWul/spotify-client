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
    const album = spotify.album.getAlbum('Drake')
    expect(fetch).toHaveBeenCalledTimes(1)
  })

  it('should call fetch with the correct URL', () => {
    const artists = spotify.album.getAlbum('Drake')
    expect(fetch).toHaveBeenCalledWith("https://api.spotify.com/v1/albums/Drake", {"headers": {"Authorization": "'Bearer foo'"}})
  })
})