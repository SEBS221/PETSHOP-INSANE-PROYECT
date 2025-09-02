<template>
  <div class="p-6">
    <h1 class="text-3xl font-bold mb-6">🐾 Admin Panel</h1>

    <!-- Lista de productos -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-4">📦 Productos</h2>
      <table class="min-w-full border border-gray-300">
        <thead>
          <tr class="bg-gray-100">
            <th class="border p-2">ID</th>
            <th class="border p-2">Nombre</th>
            <th class="border p-2">Precio</th>
            <th class="border p-2">Imagen</th>
            <th class="border p-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="p in products" :key="p._id" class="text-center">
            <td class="border p-2">{{ p._id }}</td>
            <td class="border p-2">{{ p.name }}</td>
            <td class="border p-2">${{ p.price }}</td>
            <td class="border p-2">
              <img
                v-if="p.image"
                :src="p.image"
                alt="producto"
                class="w-16 h-16 object-cover mx-auto"
              />
            </td>
            <td class="border p-2">
              <button
                @click="deleteProduct(p._id)"
                class="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Eliminar
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- Formulario para agregar producto -->
      <form @submit.prevent="addProduct" class="mt-6 space-y-4">
        <h3 class="text-xl font-semibold">➕ Agregar Producto</h3>
        <input v-model="newProduct.name" placeholder="Nombre" class="border p-2 w-full" />
        <input
          v-model.number="newProduct.price"
          type="number"
          step="0.01"
          placeholder="Precio"
          class="border p-2 w-full"
        />
        <input v-model="newProduct.image" placeholder="URL de imagen" class="border p-2 w-full" />
        <button type="submit" class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          Guardar
        </button>
      </form>
    </section>

    <!-- Lista de gatos -->
    <section>
      <h2 class="text-2xl font-semibold mb-4">🐱 Gatos</h2>
      <ul class="list-disc ml-6">
        <li v-for="c in cats" :key="c._id">{{ c.name }} - {{ c.age }} años</li>
      </ul>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const products = ref([])
const cats = ref([])
const newProduct = ref({ name: '', price: 0, image: '' })

// Cargar datos al iniciar
onMounted(async () => {
  await fetchProducts()
  await fetchCats()
})

// Productos
const fetchProducts = async () => {
  const res = await axios.get('http://localhost:5000/api/products')
  products.value = res.data
}

const addProduct = async () => {
  if (!newProduct.value.name || !newProduct.value.price) return
  await axios.post('http://localhost:5000/api/products', newProduct.value)
  newProduct.value = { name: '', price: 0, image: '' }
  await fetchProducts()
}

const deleteProduct = async (id) => {
  await axios.delete(`http://localhost:5000/api/products/${id}`)
  await fetchProducts()
}

// Gatos
const fetchCats = async () => {
  const res = await axios.get('http://localhost:5000/api/cats')
  cats.value = res.data
}
</script>

<style>
body {
  font-family: sans-serif;
  background: #f9fafb;
}
</style>
