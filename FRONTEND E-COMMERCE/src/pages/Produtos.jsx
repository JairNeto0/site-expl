// src/pages/Produtos.jsx

import { useState, useEffect } from 'react'
import CardProduto from '../components/CardProduto'

const produtosMock = [
  { id: 1, name: 'Expl💥 Morango', price: 8.90, image: 'https://placehold.co/250x200' },
  { id: 2, name: 'Expl💥 Prime Uva', price: 8.90, image: 'https://placehold.co/250x200' },
  { id: 3, name: 'Expl💥 Açaí', price: 7.90, image: 'https://placehold.co/250x200' },
  { id: 4, name: 'Expl💥 Citrus', price: 7.90, image: 'https://placehold.co/250x200' },
  { id: 5, name: 'Expl💥 Prime Mango', price: 8.90, image: 'https://placehold.co/250x200' },
  { id: 6, name: 'Expl💥 Prime Ice', price: 7.90, image: 'https://placehold.co/250x200' },
]

function Produtos() {
  const [produtos, setProdutos] = useState([])
  const [carregando, setCarregando] = useState(true)

  useEffect(() => {
    // Simula uma busca na API com delay de 500ms
    setTimeout(() => {
      setProdutos(produtosMock)
      setCarregando(false)
    }, 500)
  }, [])

  if (carregando) {
    return <div className="container"><p>Carregando produtos...</p></div>
  }

  return (
    <div>
      <h2 style={{ padding: '30px' }}>Nossos Produtos</h2>
      <div className="grid-produtos">
        {produtos.map(p => (
          <CardProduto key={p.id} produto={p} />
        ))}
      </div>
    </div>
  )
}

export default Produtos