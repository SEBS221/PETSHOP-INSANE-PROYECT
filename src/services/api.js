import http from './http' // asumo que ya tienes axios instanciado aquí

export const productService = {
  getProducts: () => http.get('/products').then((r) => r.data),
  createProduct: (payload) => http.post('/products', payload).then((r) => r.data),
  buyProduct: (id) => http.post(`/products/${id}/buy`).then((r) => r.data),
  updateProduct: (id, payload) => http.put(`/products/${id}`, payload).then((r) => r.data),
  deleteProduct: (id) => http.delete(`/products/${id}`).then((r) => r.data),
}

export const catService = {
  getCats: () => http.get('/cats').then((r) => r.data),
  createCat: (payload) => http.post('/cats', payload).then((r) => r.data),
  adoptCat: (id) => http.post(`/cats/${id}/adopt`).then((r) => r.data),
  updateCat: (id, payload) => http.put(`/cats/${id}`, payload).then((r) => r.data),
  deleteCat: (id) => http.delete(`/cats/${id}`).then((r) => r.data),
}
