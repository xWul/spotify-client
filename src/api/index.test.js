import SpotifyWrapper from './index'
import mockFetch from './mockFetch'

describe('SpotifyWrapper Api', function () {
  it('should create an instance of SpotifyWrapper', () => {
    const spotify = new SpotifyWrapper({})
    expect(spotify).toBeInstanceOf(SpotifyWrapper)
  })

  it('should receive apiURL as an option', () => {
    const spotify = new SpotifyWrapper({
      apiURL: 'urlizator'
    })
    expect(spotify.apiURL).toEqual('urlizator')
  })

  it('should receive token as an option', () => {
    const spotify = new SpotifyWrapper({
      token: 'tokenizator'
    })
    expect(spotify.token).toEqual('tokenizator')
  })

  describe('request method', () => {
    it('should have request method', () => {
      const spotify = new SpotifyWrapper({})
      expect(spotify.request).toBeDefined()
    })

    it('should call fetch when request', () => {
      fetch = mockFetch({ id: 'test' })
      const spotify = new SpotifyWrapper({
        token: 'test123'
      })
      spotify.request('url')
      expect(fetch).toHaveBeenCalledTimes(1)
    })

    it('should call fetch with right url passed', () => {
      fetch = mockFetch({ id: 'test' })
      const spotify = new SpotifyWrapper({
        token: 'test'
      })

      spotify.request('url')
      expect(fetch).toHaveBeenCalledWith("url", {"headers": {"Authorization": "'Bearer test'"}})
    })

  })
})
