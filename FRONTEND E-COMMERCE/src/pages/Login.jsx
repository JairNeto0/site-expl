import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {

  var navigate = useNavigate()
  var [email, setEmail] = useState('')
  var [senha, setSenha] = useState('')

  function fazerLogin() {
    if (email == '' || senha == '') {
      alert('Preencha todos os campos!')
      return
    }
    alert('Login realizado com sucesso!')
    navigate('/produtos')
  }

  return (
    <div className="container">
      <h2 style={{ marginBottom: '20px' }}>Login</h2>

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

      <button onClick={fazerLogin} style={{ marginBottom: '15px' }}>Entrar</button>

      <p style={{ marginTop: '15px' }}>
        Não tem conta?{' '}
        <span
          onClick={function() { navigate('/cadastro') }}
          style={{ color: 'orange', cursor: 'pointer' }}
        >
          Cadastre-se
        </span>
      </p>
    </div>
  )
}

export default Login