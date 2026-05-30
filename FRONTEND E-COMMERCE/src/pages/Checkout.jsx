import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Checkout() {

  var navigate = useNavigate()

  var [nome, setNome] = useState('')
  var [email, setEmail] = useState('')
  var [endereco, setEndereco] = useState('')
  var [pagamento, setPagamento] = useState('cartao')

  function finalizarPedido() {
    if (nome == '' || email == '' || endereco == '') {
      alert('Preencha todos os campos!')
      return
    }
    alert('Pedido realizado com sucesso!')
    navigate('/produtos')
  }

  return (
    <div className="container">
      <h2 style={{ marginBottom: '20px' }}>Finalizar Pedido</h2>

      <div style={{ marginBottom: '15px' }}>
        <label>Nome completo:</label><br />
        <input
          type="text"
          value={nome}
          onChange={function(e) { setNome(e.target.value) }}
          style={{ padding: '10px', width: '300px', marginTop: '5px', background: '#222', color: 'white', border: '1px solid white' }}
        />
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label>Email:</label><br />
        <input
          type="email"
          value={email}
          onChange={function(e) { setEmail(e.target.value) }}
          style={{ padding: '10px', width: '300px', marginTop: '5px', background: '#222', color: 'white', border: '1px solid white' }}
        />
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label>Endereço de entrega:</label><br />
        <input
          type="text"
          value={endereco}
          onChange={function(e) { setEndereco(e.target.value) }}
          style={{ padding: '10px', width: '300px', marginTop: '5px', background: '#222', color: 'white', border: '1px solid white' }}
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <label>Forma de pagamento:</label><br />
        <select
          value={pagamento}
          onChange={function(e) { setPagamento(e.target.value) }}
          style={{ padding: '10px', width: '300px', marginTop: '5px', background: '#222', color: 'white', border: '1px solid white' }}
        >
          <option value="cartao">Cartão de Crédito</option>
          <option value="pix">Pix</option>
          <option value="boleto">Boleto</option>
        </select>
      </div>

      <button onClick={finalizarPedido}>Confirmar Pedido</button>
    </div>
  )
}

export default Checkout