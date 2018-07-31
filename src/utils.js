export const setFavorite = (type, id) => {
  const favorites = getFavorites()
  if (!favorites[type]) favorites[type] = []
  favorites[type].push(id)
  persistFavorites(favorites)
}

export const removeFavorite = (type, id) => {
  const favorites = getFavorites()
  if (!favorites[type]) favorites[type] = []
  const index = favorites[type].indexOf(id)
  if (index !== -1) {
    favorites[type].splice(index, 1);
  }

  persistFavorites(favorites)
}

export const getFavorites = () => {
  return JSON.parse(window.localStorage.getItem('favorites')) || {}
}

const persistFavorites = (data) => {
  window.localStorage.setItem('favorites', JSON.stringify(data))
}