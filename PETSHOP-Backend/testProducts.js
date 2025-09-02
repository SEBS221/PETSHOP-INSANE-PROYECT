import mongoose from 'mongoose'
import Product from './models/Product.js'

const mongoURI =
  'mongodb+srv://manolo666colita_db_user:pHgjQz0mXWBGrcMF@cluster0.dmp4mdd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const products = [
  {
    name: 'Churus',
    description: 'Snacks irresistibles para gatos.',
    price: 5.99,
    image: 'https://placekitten.com/400/200',
  },
  {
    name: 'Cuido Premium',
    description: 'Alimento balanceado y nutritivo para gatos exigentes.',
    price: 19.99,
    image: 'https://placekitten.com/401/200',
  },
  {
    name: 'Collar con cascabel',
    description: 'Estilo y seguridad para tu gato.',
    price: 7.99,
    image: 'https://placekitten.com/402/200',
  },
  {
    name: 'Caja de arena',
    description: 'Cómoda y fácil de limpiar para tu gato.',
    price: 14.99,
    image: 'https://placekitten.com/403/200',
  },
  {
    name: 'Gimnasio para gatos',
    description: 'Diversión y ejercicio para gatos activos.',
    price: 49.99,
    image: 'https://placekitten.com/404/200',
  },
]

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    console.log('✅ Conectado a MongoDB Atlas')
    await Product.insertMany(products)
    console.log('🛍️ Productos insertados correctamente')
    mongoose.connection.close()
  })
  .catch((err) => {
    console.error('❌ Error de conexión:', err)
  })
