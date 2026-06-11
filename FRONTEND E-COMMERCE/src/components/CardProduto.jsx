// src/components/CardProduto.jsx

import { Link } from 'react-router-dom'
import { useCarrinho } from '../context/CarrinhoContext'

function CardProduto({ produto }) {
  const { adicionarItem } = useCarrinho()
  const preco = Number(produto.price ?? produto.preco ?? 0)

  function handleAdicionar() {
    adicionarItem(produto, 1)
    alert(`"${produto.name ?? produto.nome}" adicionado ao carrinho!`)
  }

  return (
    <div className="card-produto">
      <img src={produto.image ?? produto.imagem} alt={produto.name ?? produto.nome} />
      <h3>{produto.name ?? produto.nome}</h3>
      <p>R$ {preco.toFixed(2)}</p>
      <Link to={`/produto/${produto.id}`}>Ver detalhes</Link>
      <button onClick={handleAdicionar} style={{ marginTop: '8px' }}>
        + Carrinho
      </button>
    </div>
  )
}

export default CardProduto