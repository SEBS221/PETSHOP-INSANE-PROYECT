import express from 'express'

const app = express()
const PORT = 3000

// Endpoint de prueba
app.get('/', (req, res) => {
  res.send('Backend con ES Modules funcionando ')
})

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
})
