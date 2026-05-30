import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Carrinho() {

  var navigate = useNavigate()

  var [itens, setItens] = useState([
    { id: 1, nome: 'Expl💥 Morango', preco: 8.90, quantidade: 1 },
    { id: 2, nome: 'Expl💥 Prime Uva', preco: 8.90, quantidade: 2 },
  ])

  function removerItem(id) {
    var novaLista = []
    for (var i = 0; i < itens.length; i++) {
      if (itens[i].id != id) {
        novaLista.push(itens[i])
      }
    }
    setItens(novaLista)
  }

  var total = 0
  for (var i = 0; i < itens.length; i++) {
    total = total + (itens[i].preco * itens[i].quantidade)
  }

  return (
    <div className="container">
      <h2 style={{ marginBottom: '20px' }}>Meu Carrinho</h2>
      <table>
        <thead>
          <tr>
            <th>Produto</th>
            <th>Preço</th>
            <th>Quantidade</th>
            <th>Subtotal</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          {itens.map(function(item) {
            return (
              <tr key={item.id}>
                <td>{item.nome}</td>
                <td>R$ {item.preco.toFixed(2)}</td>
                <td>{item.quantidade}</td>
                <td>R$ {(item.preco * item.quantidade).toFixed(2)}</td>
                <td>
                  <button onClick={function() { removerItem(item.id) }}>Remover</button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <h3 style={{ margin: '20px 0', color: 'orange' }}>Total: R$ {total.toFixed(2)}</h3>
      <button onClick={function() { navigate('/checkout') }}>Finalizar Compra</button>
    </div>
  )
}

export default Carrinho