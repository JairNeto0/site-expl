// src/pages/Produto.jsx

import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useCarrinho } from '../context/CarrinhoContext'

const produtosMock = [
  { id: 1, name: 'Expl💥 Morango', price: 8.90, image: 'https://placehold.co/400x300', description: 'Sabor intenso de morango com energia máxima.' },
  { id: 2, name: 'Expl💥 Prime Uva', price: 8.90, image: 'https://placehold.co/400x300', description: 'Líder em volume de vendas. Sabor uva refrescante.' },
  { id: 3, name: 'Expl💥 Açaí', price: 7.90, image: 'https://placehold.co/400x300', description: 'Alto volume de vendas. Sabor açaí com energia.' },
  { id: 4, name: 'Expl💥 Citrus', price: 7.90, image: 'https://placehold.co/400x300', description: 'Sabor cítrico refrescante para o dia a dia.' },
  { id: 5, name: 'Expl💥 Prime Mango', price: 8.90, image: 'https://placehold.co/400x300', description: 'Sabor manga tropical com energia explosiva.' },
  { id: 6, name: 'Expl💥 Prime Ice', price: 7.90, image: 'https://placehold.co/400x300', description: 'Sabor gelado e refrescante.' },
]

function Produto() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { adicionarItem } = useCarrinho()

  const [produto, setProduto] = useState(null)
  const [carregando, setCarregando] = useState(true)
  const [quantidade, setQuantidade] = useState(1)
  const [adicionado, setAdicionado] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      const encontrado = produtosMock.find(p => p.id === Number(id))
      setProduto(encontrado || null)
      setCarregando(false)
    }, 300)
  }, [id])

  function handleAdicionar() {
    adicionarItem(produto, quantidade)
    setAdicionado(true)
    setTimeout(() => setAdicionado(false), 2000)
  }

  if (carregando) return <div className="container"><p>Carregando...</p></div>
  if (!produto) return <div className="container"><h2>Produto não encontrado</h2></div>

  return (
    <div className="container">
      <img src={produto.image} alt={produto.name} style={{ width: '400px', maxWidth: '100%' }} />
      <h2 style={{ marginTop: '20px' }}>{produto.name}</h2>
      <p style={{ color: 'orange', fontSize: '24px', margin: '10px 0' }}>
        R$ {produto.price.toFixed(2)}
      </p>
      <p style={{ margin: '10px 0' }}>{produto.description}</p>

      <div style={{
        display: 'flex', alignItems: 'center',
        justifyContent: 'center', gap: '12px', margin: '20px 0'
      }}>
        <button
          onClick={() => setQuantidade(q => Math.max(1, q - 1))}
          style={{ padding: '8px 16px' }}
        >−</button>
        <span style={{ fontSize: '20px' }}>{quantidade}</span>
        <button
          onClick={() => setQuantidade(q => q + 1)}
          style={{ padding: '8px 16px' }}
        >+</button>
      </div>

      <button onClick={handleAdicionar} style={{ marginRight: '12px' }}>
        {adicionado ? '✓ Adicionado!' : 'Adicionar ao Carrinho'}
      </button>
      <button onClick={() => navigate('/carrinho')} style={{ background: '#333' }}>
        Ver Carrinho
      </button>
    </div>
  )
}

export default Produto