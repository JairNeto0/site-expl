import { BrowserRouter, Routes, Route } from "react-router-dom";

import AdminLayout from "../layouts/AdminLayout";

import Dashboard from "../pages/Dashboard/Dashboard";
import Products from "../pages/Products/Products";
import Orders from "../pages/Orders/Orders";
import Customers from "../pages/Customers/Customers";
import Employees from "../pages/Employees/Employees";
import Reports from "../pages/Reports/Reports";
import Settings from "../pages/Settings/Settings";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <AdminLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </AdminLayout>
    </BrowserRouter>
  );
}
