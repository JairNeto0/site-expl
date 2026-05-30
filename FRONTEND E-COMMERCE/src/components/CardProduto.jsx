import { Link } from 'react-router-dom'

function CardProduto({ id, nome, preco, imagem }) {
  return (
    <div className="card-produto">
      <img src={imagem} alt={nome} />
      <h3>{nome}</h3>
      <p>R$ {preco}</p>
      <Link to={`/produto/${id}`}>Ver detalhes</Link>
    </div>
  )
}

export default CardProduto
