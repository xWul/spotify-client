const { href } = window.location

const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=734facdc5d78467f87ff591c51e18345&response_type=token&redirect_uri=${href}`

export default AUTH_URL
