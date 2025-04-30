import React, { useEffect, useState } from "react";
// Importe os serviços de pedidos quando disponíveis
// import { getOrders, updateOrderStatus } from "@/services/orderService";

const mockOrders = [
  { id: 1, customer: "João Silva", status: "Pendente", total: 12000 },
  { id: 2, customer: "Maria Souza", status: "Enviado", total: 4500 }
];

const OrderManagement: React.FC = () => {
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  // Substitua pelo fetch real quando o serviço estiver pronto
  const fetchOrders = async () => {
    setLoading(true);
    // const data = await getOrders();
    // setOrders(data || []);
    setOrders(mockOrders);
    setLoading(false);
  };

  useEffect(() => { fetchOrders(); }, []);

  const handleStatusChange = async (id: number, status: string) => {
    // await updateOrderStatus(id, status);
    fetchOrders();
  };

  return (
    <div>
      {loading ? <p>Carregando pedidos...</p> : (
        <table className="w-full text-left">
          <thead>
            <tr>
              <th>Cliente</th>
              <th>Status</th>
              <th>Total</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((o) => (
              <tr key={o.id}>
                <td>{o.customer}</td>
                <td>{o.status}</td>
                <td>{(o.total/100).toLocaleString('pt-MZ')} MZN</td>
                <td>
                  <select value={o.status} onChange={e => handleStatusChange(o.id, e.target.value)} className="border rounded p-1">
                    <option value="Pendente">Pendente</option>
                    <option value="Enviado">Enviado</option>
                    <option value="Entregue">Entregue</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default OrderManagement;