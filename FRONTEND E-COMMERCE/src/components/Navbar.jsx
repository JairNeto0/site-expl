import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">MinhaLoja</Link>
      <div className="navbar-links">
        <Link to="/produtos">Produtos</Link>
        <Link to="/carrinho">Carrinho</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  )
}

export default Navbar