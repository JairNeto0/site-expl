import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div
      style={{
        width: "240px",
        background: "#1976d2",
        color: "#fff",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <h2>Explosion Admin</h2>

      <nav>
        <p><Link to="/">Dashboard</Link></p>
        <p><Link to="/products">Produtos</Link></p>
        <p><Link to="/orders">Pedidos</Link></p>
        <p><Link to="/customers">Clientes</Link></p>
        <p><Link to="/employees">Funcionários</Link></p>
        <p><Link to="/reports">Relatórios</Link></p>
        <p><Link to="/settings">Configurações</Link></p>
      </nav>
    </div>
  );
}
