import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Cadastro() {

  var navigate = useNavigate()
  var [nome, setNome] = useState('')
  var [email, setEmail] = useState('')
  var [senha, setSenha] = useState('')
  var [confirma, setConfirma] = useState('')

  function fazerCadastro() {
    if (nome == '' || email == '' || senha == '' || confirma == '') {
      alert('Preencha todos os campos!')
      return
    }
    if (senha != confirma) {
      alert('As senhas não coincidem!')
      return
    }
    alert('Cadastro realizado com sucesso!')
    navigate('/login')
  }

  return (
    <div className="container">
      <h2 style={{ marginBottom: '20px' }}>Cadastro</h2>

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
        <label>Senha:</label><br />
        <input
          type="password"
          value={senha}
          onChange={function(e) { setSenha(e.target.value) }}
          style={{ padding: '10px', width: '300px', marginTop: '5px', background: '#222', color: 'white', border: '1px solid white' }}
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <label>Confirmar senha:</label><br />
        <input
          type="password"
          value={confirma}
          onChange={function(e) { setConfirma(e.target.value) }}
          style={{ padding: '10px', width: '300px', marginTop: '5px', background: '#222', color: 'white', border: '1px solid white' }}
        />
      </div>

      <button onClick={fazerCadastro} style={{ marginBottom: '15px' }}>Cadastrar</button>

      <p style={{ marginTop: '15px' }}>
        Já tem conta?{' '}
        <span
          onClick={function() { navigate('/login') }}
          style={{ color: 'orange', cursor: 'pointer' }}
        >
          Fazer login
        </span>
      </p>
    </div>
  )
}

export default Cadastro