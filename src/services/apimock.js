// Implementación mock: datos de prueba en memoria, sin backend.
// Debe cumplir la misma interfaz que apiclient.js.

const DB = [
  {
    author: 'juan',
    name: 'casa-1',
    points: [
      { x: 20, y: 20 },
      { x: 200, y: 20 },
      { x: 200, y: 150 },
      { x: 20, y: 150 },
      { x: 20, y: 20 },
    ],
  },
  {
    author: 'juan',
    name: 'techo',
    points: [
      { x: 20, y: 150 },
      { x: 110, y: 60 },
      { x: 200, y: 150 },
    ],
  },
  {
    author: 'maria',
    name: 'garage',
    points: [
      { x: 40, y: 40 },
      { x: 260, y: 40 },
      { x: 260, y: 180 },
    ],
  },
]

// Simula latencia de red para que loading/error se sientan reales en la UI.
const delay = (ms = 250) => new Promise((resolve) => setTimeout(resolve, ms))

export async function getAll() {
  await delay()
  return DB
}

export async function getByAuthor(author) {
  await delay()
  const items = DB.filter((bp) => bp.author === author)
  if (!items.length) {
    const err = new Error(`No se encontraron blueprints para el autor "${author}"`)
    err.response = { status: 404 }
    throw err
  }
  return items
}

export async function getByAuthorAndName(author, name) {
  await delay()
  const bp = DB.find((b) => b.author === author && b.name === name)
  if (!bp) {
    const err = new Error(`Blueprint "${name}" de "${author}" no encontrado`)
    err.response = { status: 404 }
    throw err
  }
  return bp
}

export async function create(blueprint) {
  await delay()
  DB.push(blueprint)
  return blueprint
}
