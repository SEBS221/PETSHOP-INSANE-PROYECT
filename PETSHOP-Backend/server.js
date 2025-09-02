import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

import catRoutes from './routes/cats.js'
import productRoutes from './routes/products.js'

const app = express()
app.use(cors())
app.use(express.json())

// Conexión a MongoDB Atlas
const mongoURI =
  'mongodb+srv://manolo666colita_db_user:pHgjQz0mXWBGrcMF@cluster0.dmp4mdd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('✅ Conectado a MongoDB Atlas'))
  .catch((err) => console.error('❌ Error de conexión:', err))

// Rutas
app.use('/api/cats', catRoutes)
app.use('/api/products', productRoutes)

// Puerto fijo
const PORT = 5000
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`)
})
