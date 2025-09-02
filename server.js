// server.js
import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())

// --- Datos falsos (se perderán al reiniciar) ---
let products = [
  { id: 1, name: 'Churus (Paquete de 10)', price: 15.99, image: '/imagenes/Churus.jpg' },
  { id: 2, name: 'Cuido para Gatos (5kg)', price: 25.5, image: '/imagenes/Cuido.jpg' },
  { id: 3, name: 'Collar con Cascabel', price: 8.99, image: '/imagenes/Collar.jpg' },
  { id: 4, name: 'Caja de Arena Automática', price: 49.99, image: '/imagenes/CajaArena.jpg' },
  { id: 5, name: 'Gimnasio para Gatos (Torre)', price: 79.99, image: '/imagenes/Gimnasio.jpg' },
]

// --- Rutas CRUD ---
// Obtener todos los productos
app.get('/productos', (req, res) => {
  res.json(products)
})

// Eliminar un producto por ID
app.delete('/productos/:id', (req, res) => {
  const id = parseInt(req.params.id)
  products = products.filter((p) => p.id !== id)
  res.json({ message: `Producto ${id} eliminado` })
})

// Agregar producto
app.post('/productos', (req, res) => {
  const newProduct = { id: Date.now(), ...req.body }
  products.push(newProduct)
  res.json(newProduct)
})

// Editar producto
app.put('/productos/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const index = products.findIndex((p) => p.id === id)
  if (index !== -1) {
    products[index] = { ...products[index], ...req.body }
    res.json(products[index])
  } else {
    res.status(404).json({ message: 'Producto no encontrado' })
  }
})

// --- Servidor ---
const PORT = 3000
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
})
