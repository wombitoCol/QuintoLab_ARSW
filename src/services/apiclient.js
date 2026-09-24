// Implementación real: consume el backend con Axios (Labs 3 y 4).
// Debe cumplir la misma interfaz que apimock.js.
import http from './httpClient.js'

export async function getAll() {
  const { data } = await http.get('/v1/blueprints')
  return data.data
}

export async function getByAuthor(author) {
  const { data } = await http.get(`/v1/blueprints/${encodeURIComponent(author)}`)
  return data.data
}

export async function getByAuthorAndName(author, name) {
  const { data } = await http.get(
    `/v1/blueprints/${encodeURIComponent(author)}/${encodeURIComponent(name)}`,
  )
  return data.data
}

export async function create(blueprint) {
  const { data } = await http.post('/v1/blueprints', blueprint)
  return data.data
}
