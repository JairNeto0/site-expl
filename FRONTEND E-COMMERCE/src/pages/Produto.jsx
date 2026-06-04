import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Produto() {

  var produto1 = { id: 1, nome: 'Expl💥 Morango', preco: '8.90', imagem: 'https://via.placeholder.com/400x300', descricao: 'Sabor intenso de morango com energia máxima.' }
  var produto2 = { id: 2, nome: 'Expl💥 Prime Uva', preco: '8.90', imagem: 'https://via.placeholder.com/400x300', descricao: 'Líder em volume de vendas. Sabor uva refrescante.' }
  var produto3 = { id: 3, nome: 'Expl💥 Açaí', preco: '7.90', imagem: 'https://via.placeholder.com/400x300', descricao: 'Alto volume de vendas. Sabor açaí com energia.' }
  var produto4 = { id: 4, nome: 'Expl💥 Citrus', preco: '7.90', imagem: 'https://via.placeholder.com/400x300', descricao: 'Sabor cítrico refrescante para o dia a dia.' }
  var produto5 = { id: 5, nome: 'Expl💥 Prime Mango', preco: '8.90', imagem: 'https://via.placeholder.com/400x300', descricao: 'Sabor manga tropical com energia explosiva.' }
  var produto6 = { id: 6, nome: 'Expl💥 Prime Ice', preco: '7.90', imagem: 'https://via.placeholder.com/400x300', descricao: 'Sabor gelado e refrescante.' }

  var lista = [produto1, produto2, produto3, produto4, produto5, produto6]

  var params = useParams()
  var navigate = useNavigate()
  var produto = null

  for (var i = 0; i < lista.length; i++) {
    if (lista[i].id == params.id) {
      produto = lista[i]
    }
  }

  if (produto == null) {
    return <h2 style={{ padding: '30px' }}>Produto não encontrado</h2>
  }

  return (
    <div className="container">
      <img src={produto.imagem} alt={produto.nome} style={{ width: '400px', maxWidth: '100%' }} />
      <h2 style={{ marginTop: '20px' }}>{produto.nome}</h2>
      <p style={{ color: 'orange', fontSize: '24px', margin: '10px 0' }}>R$ {produto.preco}</p>
      <p style={{ margin: '10px 0' }}>{produto.descricao}</p>
      <button onClick={function() { navigate('/carrinho') }}>Adicionar ao Carrinho</button>
    </div>
  )
}

export default Produto