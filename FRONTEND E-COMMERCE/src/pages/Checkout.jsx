// src/pages/Checkout.jsx

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCarrinho } from '../context/CarrinhoContext'
import { pedidoService } from '../services/apiService'

function Checkout() {
  const navigate = useNavigate()
  const { itens, totalPreco, limparCarrinho } = useCarrinho()

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [endereco, setEndereco] = useState('')
  const [pagamento, setPagamento] = useState('cartao')
  const [enviando, setEnviando] = useState(false)
  const [erro, setErro] = useState(null)

  const inputStyle = {
    padding: '10px', width: '300px', marginTop: '5px',
    background: '#222', color: 'white', border: '1px solid white'
  }

  async function finalizarPedido() {
    if (!nome || !email || !endereco) {
      setErro('Preencha todos os campos!')
      return
    }
    setErro(null)
    setEnviando(true)
    try {
      await pedidoService.criar(itens, endereco, pagamento)
      limparCarrinho()
      alert('Pedido realizado com sucesso!')
      navigate('/produtos')
    } catch (err) {
      setErro(err.message || 'Erro ao finalizar pedido.')
    } finally {
      setEnviando(false)
    }
  }

  return (
    <div className="container">
      <h2 style={{ marginBottom: '20px' }}>Finalizar Pedido</h2>

      <div style={{ marginBottom: '20px', color: 'orange' }}>
        {itens.length} {itens.length === 1 ? 'item' : 'itens'} —{' '}
        Total: R$ {totalPreco.toFixed(2)}
      </div>

      {erro && <p style={{ color: 'red', marginBottom: '15px' }}>{erro}</p>}

      <div style={{ marginBottom: '15px' }}>
        <label>Nome completo:</label><br />
        <input type="text" value={nome}
          onChange={e => setNome(e.target.value)} style={inputStyle} />
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label>Email:</label><br />
        <input type="email" value={email}
          onChange={e => setEmail(e.target.value)} style={inputStyle} />
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label>Endereço de entrega:</label><br />
        <input type="text" value={endereco}
          onChange={e => setEndereco(e.target.value)} style={inputStyle} />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <label>Forma de pagamento:</label><br />
        <select value={pagamento}
          onChange={e => setPagamento(e.target.value)} style={inputStyle}>
          <option value="cartao">Cartão de Crédito</option>
          <option value="pix">Pix</option>
          <option value="boleto">Boleto</option>
        </select>
      </div>

      <button onClick={finalizarPedido} disabled={enviando}>
        {enviando ? 'Enviando...' : 'Confirmar Pedido'}
      </button>
    </div>
  )
}

export default Checkout