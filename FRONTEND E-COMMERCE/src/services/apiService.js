// src/services/apiService.js
 
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000'
 
function getHeaders() {
  const token = localStorage.getItem('token')
  return {
    'Content-Type': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {})
  }
}
 
async function handleResponse(res) {
  if (!res.ok) {
    const err = await res.json().catch(() => ({}))
    throw new Error(err.message || `Erro ${res.status}`)
  }
  return res.json()
}
 
export const authService = {
  async login(email, senha) {
    const res = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password: senha })
    })
    return handleResponse(res)
  },
 
  async cadastrar(nome, email, senha) {
    const res = await fetch(`${API_URL}/users`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: nome, email, password: senha })
    })
    await handleResponse(res)
    return this.login(email, senha)
  }
}
 
export const produtoService = {
  async listar() {
    const res = await fetch(`${API_URL}/products`, {
      headers: getHeaders()
    })
    return handleResponse(res)
  },
 
  async buscarPorId(id) {
    const res = await fetch(`${API_URL}/products/${id}`, {
      headers: getHeaders()
    })
    return handleResponse(res)
  }
}
 
export const pedidoService = {
  async criar(itens, endereco, pagamento) {
    const res = await fetch(`${API_URL}/orders`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify({
        items: itens.map(i => ({
          productId: i.id,
          quantity: i.quantidade
        })),
        address: endereco,
        paymentMethod: pagamento
      })
    })
    return handleResponse(res)
  }
}
 