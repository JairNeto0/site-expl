import CardProduto from '../components/CardProduto'

function Produtos() {

  var produto1 = { id: 1, nome: 'Expl💥 Morango', preco: '8.90', imagem: 'https://via.placeholder.com/250x200' }
  var produto2 = { id: 2, nome: 'Expl💥 Prime Uva', preco: '8.90', imagem: 'https://via.placeholder.com/250x200' }
  var produto3 = { id: 3, nome: 'Expl💥 Açaí', preco: '7.90', imagem: 'https://via.placeholder.com/250x200' }
  var produto4 = { id: 4, nome: 'Expl💥 Citrus', preco: '7.90', imagem: 'https://via.placeholder.com/250x200' }
  var produto5 = { id: 5, nome: 'Expl💥 Prime Mango', preco: '8.90', imagem: 'https://via.placeholder.com/250x200' }
  var produto6 = { id: 6, nome: 'Expl💥 Prime Ice', preco: '7.90', imagem: 'https://via.placeholder.com/250x200' }

  var lista = [produto1, produto2, produto3, produto4, produto5, produto6]

  return (
    <div>
      <h2 style={{ padding: '30px' }}>Nossos Produtos</h2>
      <div className="grid-produtos">
        {lista.map(function(p) {
          return <CardProduto key={p.id} id={p.id} nome={p.nome} preco={p.preco} imagem={p.imagem} />
        })}
      </div>
    </div>
  )
}

export default Produtos