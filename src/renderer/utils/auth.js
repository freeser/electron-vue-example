import Cookie from 'vue-cookie'

export const setToken = (key, token) => {
  if (process.server) return
  window.localStorage.setItem(key, token)
  Cookie.set(key, token)
}

export const unsetToken = () => {
  if (process.server) return
  window.localStorage.removeItem('tokenId')
  Cookie.delete('tokenId')
}

export const getFromCookie = (req, name) => {
  if (!req || !req.headers || !req.headers.cookie) return

  const jwtCookie = req.headers.cookie
    .split(';')
    .find(c => c.trim().startsWith(name + '='))
  if (!jwtCookie) return

  return jwtCookie.split('=')[1]
}

export const getFromLocal = (name) => {
  if (process.server) return
  return Cookie.get(name) || window.localStorage.getItem(name)
}
