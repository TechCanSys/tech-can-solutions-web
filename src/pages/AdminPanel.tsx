import React from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import ProductManagement from "../components/admin/ProductManagement";
import CategoryManagement from "../components/admin/CategoryManagement";
import OrderManagement from "../components/admin/OrderManagement";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AdminPanel: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!user || !user.is_admin) {
      navigate("/login");
    }
  }, [user, navigate]);

  if (!user || !user.is_admin) {
    return null;
  }

  return (
    <>
      <Navbar />
      <section className="pt-32 pb-16 min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-3xl font-montserrat font-bold mb-8 text-tech-charcoal">Painel Administrativo</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold mb-4 text-tech-blue">Produtos</h2>
              <ProductManagement />
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold mb-4 text-tech-blue">Categorias</h2>
              <CategoryManagement />
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold mb-4 text-tech-blue">Pedidos</h2>
              <OrderManagement />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AdminPanel;