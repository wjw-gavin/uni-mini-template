const http = uni.$u.http

export const getCode = (params) => {
  return http.get('/logincode', { params })
}

export const login = (params) => {
  return http.post('/login', params)
}