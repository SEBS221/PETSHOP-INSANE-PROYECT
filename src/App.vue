<template>
  <div id="app" class="petshop-app">
    <!-- Header Section -->
    <header class="header">
      <h1 class="title">PetShop Felina</h1>
      <p class="subtitle">Adopta un gato o compra accesorios premium para tu mascota</p>
    </header>

    <!-- Navigation Tabs -->
    <nav class="tabs">
      <button
        class="tab-button"
        :class="{ active: activeTab === 'adopt' }"
        @click="activeTab = 'adopt'"
      >
        Adopción de Gatos
      </button>
      <button
        class="tab-button"
        :class="{ active: activeTab === 'shop' }"
        @click="activeTab = 'shop'"
      >
        Tienda de Productos
      </button>
    </nav>

    <!-- Adoption Section -->
    <section v-if="activeTab === 'adopt'" class="section adoption-section">
      <h2 class="section-title">Adopta un Gato</h2>
      <div class="cat-grid">
        <div v-for="cat in cats" :key="cat.id" class="cat-card">
          <img :src="cat.image" alt="Gato" class="cat-image" />
          <h3 class="cat-name">{{ cat.name }}</h3>
          <p class="cat-description">{{ cat.description }}</p>
          <button class="adopt-button" @click="adoptCat(cat)">Adoptar</button>
        </div>
      </div>
    </section>

    <!-- Shop Section -->
    <section v-if="activeTab === 'shop'" class="section shop-section">
      <h2 class="section-title">Productos para Gatos</h2>
      <div class="product-grid">
        <div v-for="product in products" :key="product.id" class="product-card">
          <img :src="product.image" alt="Producto" class="product-image" />
          <h3 class="product-name">{{ product.name }}</h3>
          <p class="product-price">${{ product.price }}</p>
          <button class="buy-button" @click="buyProduct(product)">Comprar</button>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <p>&copy; 2025 PetShop Felina. Todos los derechos reservados.</p>
    </footer>

    <!-- Modal for Actions -->
    <div v-if="showModal" class="modal">
      <div class="modal-content">
        <h3>{{ modalTitle }}</h3>
        <p>{{ modalMessage }}</p>
        <button class="close-button" @click="showModal = false">Cerrar</button>
      </div>
    </div>
  </div>
</template>

<script>
// ===== Constantes nuevas (antes de export default) =====
// Cambia a '/docs' si tu backend expone Swagger en esa ruta
const BACKEND_UI_PATH = import.meta.env?.VITE_BACKEND_UI_PATH ?? '/admin'
// Usando el proxy de Vite: /backend/<ruta>
const BACKEND_UI_URL = `/backend${BACKEND_UI_PATH}`
// Si NO quieres proxy (o en prod sin reverse-proxy), usa en su lugar:
// const BACKEND_UI_URL = 'http://localhost:5000/admin';

export default {
  data() {
    return {
      activeTab: 'adopt',
      cats: [
        {
          id: 1,
          name: 'Batman',
          description: 'Gato juguetón de 2 años, ama los juguetes.',
          image: '/imagenes/Batman.jpeg',
        },
        {
          id: 2,
          name: 'Galactus',
          description: 'Gata cariñosa de 1 año, perfecta para familias.',
          image: '/imagenes/Galactus.jpeg',
        },
        {
          id: 3,
          name: 'Kanye_West',
          description: 'Gato aventurero de 3 años, le encanta explorar.',
          image: '/imagenes/Kanye_West.jpeg',
        },
        {
          id: 4,
          name: 'Vaquita',
          description: 'Gata tranquila de 4 años, ideal para hogares calmados.',
          image: '/imagenes/Vaquita.jpeg',
        },
      ],
      products: [
        { id: 1, name: 'Churus (Paquete de 10)', price: 15.99, image: '/imagenes/Churus.jpg' },
        { id: 2, name: 'Cuido para Gatos (5kg)', price: 25.5, image: '/imagenes/Cuido.jpg' },
        { id: 3, name: 'Collar con Cascabel', price: 8.99, image: '/imagenes/Collar.jpg' },
        { id: 4, name: 'Caja de Arena Automática', price: 49.99, image: '/imagenes/CajaArena.jpg' },
        {
          id: 5,
          name: 'Gimnasio para Gatos (Torre)',
          price: 79.99,
          image: '/imagenes/Gimnasio.jpg',
        },
      ],
      showModal: false,
      modalTitle: '',
      modalMessage: '',
    }
  },
  methods: {
    adoptCat(cat) {
      this.modalTitle = 'Adopción Exitosa'
      this.modalMessage = `¡Has adoptado a ${cat.name}! Felicidades por tu nuevo amigo felino.`
      this.showModal = true
    },

    buyProduct(product) {
      this.modalTitle = 'Compra Exitosa'
      this.modalMessage = `Has comprado ${product.name} por $${product.price}. ¡Gracias por tu compra!`
      this.showModal = true
    },

    // ====== MOD: abrir la interfaz del backend ======
    openBackendNewTab() {
      // Usa la constante definida arriba. Evita el warning "no-undef".
      window.open(BACKEND_UI_URL, '_blank', 'noopener')
    },

    // Atajo: Ctrl+Shift+B => abrir backend
    _onKeydown(e) {
      const key = (e.key || '').toLowerCase()
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && key === 'b') {
        e.preventDefault()
        this.openBackendNewTab()
      }
    },
  },

  mounted() {
    // ====== MOD: listeners y botón flotante (sin tocar el template) ======
    window.addEventListener('keydown', this._onKeydown)

    // Botón flotante
    const btn = document.createElement('button')
    btn.textContent = 'Backend'
    btn.title = 'Abrir interfaz del backend (Ctrl+Shift+B)'
    btn.style.cssText = `
      position:fixed;right:16px;bottom:16px;z-index:2147483647;
      background:#2563eb;color:#fff;border:0;border-radius:24px;
      padding:10px 14px;box-shadow:0 4px 12px rgba(0,0,0,.2);cursor:pointer;
      font-family: Arial, sans-serif;`
    btn.addEventListener('click', () => this.openBackendNewTab())
    document.body.appendChild(btn)
    this._backendFab = btn
  },

  beforeUnmount() {
    window.removeEventListener('keydown', this._onKeydown)
    if (this._backendFab) this._backendFab.remove()
  },
}
</script>

<style>
.petshop-app {
  font-family: 'Arial', sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background: linear-gradient(to bottom, #f9f9f9, #e0e0e0);
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  .backend-link {
    display: inline-block;
    margin-top: 12px;
    padding: 10px 14px;
    background: #2563eb;
    color: #fff;
    border-radius: 6px;
    text-decoration: none;
  }
  .backend-link:hover {
    background: #1d4ed8;
  }
}

.header {
  text-align: center;
  padding: 40px 0;
  background: #4caf50;
  color: white;
  border-radius: 10px 10px 0 0;
}

.title {
  font-size: 3em;
  margin: 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}

.subtitle {
  font-size: 1.2em;
  margin: 10px 0 0;
}

.tabs {
  display: flex;
  justify-content: center;
  margin: 20px 0;
}

.tab-button {
  padding: 15px 30px;
  margin: 0 10px;
  background: #fff;
  border: 2px solid #4caf50;
  border-radius: 30px;
  cursor: pointer;
  font-size: 1.1em;
  transition: all 0.3s ease;
}

.tab-button:hover {
  background: #4caf50;
  color: white;
}

.tab-button.active {
  background: #4caf50;
  color: white;
}

.section {
  padding: 40px;
  background: white;
  border-radius: 10px;
  margin-bottom: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.section-title {
  text-align: center;
  font-size: 2.5em;
  color: #333;
  margin-bottom: 30px;
}

.cat-grid,
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.cat-card,
.product-card {
  background: #fff;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;
}

.cat-card:hover,
.product-card:hover {
  transform: translateY(-10px);
}

.cat-image,
.product-image {
  width: 100%;
  height: 250px;
  object-fit: cover;
}

.cat-name,
.product-name {
  font-size: 1.5em;
  margin: 15px 0 5px;
  color: #4caf50;
}

.cat-description {
  font-size: 1em;
  color: #666;
  padding: 0 15px;
}

.product-price {
  font-size: 1.2em;
  color: #ff5722;
  margin: 10px 0;
}

.adopt-button,
.buy-button {
  background: #4caf50;
  color: white;
  border: none;
  padding: 12px 25px;
  margin: 15px;
  border-radius: 25px;
  cursor: pointer;
  font-size: 1em;
  transition: background 0.3s ease;
}

.adopt-button:hover,
.buy-button:hover {
  background: #388e3c;
}

.footer {
  text-align: center;
  padding: 20px;
  background: #4caf50;
  color: white;
  border-radius: 0 0 10px 10px;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: white;
  padding: 30px;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

.close-button {
  background: #ff5722;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 25px;
  cursor: pointer;
  margin-top: 20px;
}
</style>
