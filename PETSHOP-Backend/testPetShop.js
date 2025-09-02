// testPetShop.js
import fetch from 'node-fetch'

const baseURL = 'http://localhost:3000'

async function main() {
  // --- Crear un producto ---
  let response = await fetch(`${baseURL}/productos`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      nombre: 'Comida para gatos',
      categoria: 'Alimento',
      precio: 50000,
      stock: 20,
    }),
  })
  const producto = await response.json()
  console.log('Producto creado:', producto)

  // --- Crear una mascota ---
  response = await fetch(`${baseURL}/mascotas`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      nombre: 'Nina',
      especie: 'Gato',
      edad: 2,
    }),
  })
  const mascota = await response.json()
  console.log('Mascota creada:', mascota)

  // --- Crear un pedido ---
  response = await fetch(`${baseURL}/pedidos`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      cliente: 'Sebastian',
      productos: [producto._id],
      total: producto.precio,
    }),
  })
  const pedido = await response.json()
  console.log('Pedido creado:', pedido)

  // --- Listar productos ---
  response = await fetch(`${baseURL}/productos`)
  const productos = await response.json()
  console.log('Todos los productos:', productos)

  // --- Listar mascotas ---
  response = await fetch(`${baseURL}/mascotas`)
  const mascotas = await response.json()
  console.log('Todas las mascotas:', mascotas)

  // --- Listar pedidos ---
  response = await fetch(`${baseURL}/pedidos`)
  const pedidos = await response.json()
  console.log('Todos los pedidos:', pedidos)
}

main().catch((err) => console.error(err))
