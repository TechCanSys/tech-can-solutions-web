import React, { useEffect, useState } from "react";
import { getProducts, createProduct, updateProduct, deleteProduct } from "@/services/productService";

const ProductManagement: React.FC = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [editing, setEditing] = useState<any | null>(null);
  const [form, setForm] = useState({ name: "", description: "", price: "", image_url: "" });
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    setLoading(true);
    const data = await getProducts();
    setProducts(data || []);
    setLoading(false);
  };

  useEffect(() => { fetchProducts(); }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleEdit = (product: any) => {
    setEditing(product);
    setForm({
      name: product.name,
      description: product.description,
      price: product.price,
      image_url: product.image_url || ""
    });
  };

  const handleDelete = async (id: number) => {
    await deleteProduct(id);
    fetchProducts();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editing) {
      await updateProduct(editing.id, { ...form, price: Number(form.price) });
    } else {
      await createProduct({ ...form, price: Number(form.price) });
    }
    setForm({ name: "", description: "", price: "", image_url: "" });
    setEditing(null);
    fetchProducts();
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="mb-6 space-y-2">
        <input name="name" value={form.name} onChange={handleChange} placeholder="Nome" className="w-full border p-2 rounded" required />
        <input name="description" value={form.description} onChange={handleChange} placeholder="Descrição" className="w-full border p-2 rounded" required />
        <input name="price" value={form.price} onChange={handleChange} placeholder="Preço (MZN)" type="number" className="w-full border p-2 rounded" required />
        <input name="image_url" value={form.image_url} onChange={handleChange} placeholder="URL da Imagem" className="w-full border p-2 rounded" />
        <button type="submit" className="bg-tech-blue text-white px-4 py-2 rounded">{editing ? "Atualizar" : "Adicionar"}</button>
        {editing && <button type="button" className="ml-2 text-gray-500" onClick={()=>{setEditing(null);setForm({name:"",description:"",price:"",image_url:""});}}>Cancelar</button>}
      </form>
      {loading ? <p>Carregando produtos...</p> : (
        <table className="w-full text-left">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Descrição</th>
              <th>Preço</th>
              <th>Imagem</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.id}>
                <td>{p.name}</td>
                <td>{p.description}</td>
                <td>{(p.price/100).toLocaleString('pt-MZ')} MZN</td>
                <td>{p.image_url && <img src={p.image_url} alt={p.name} className="h-10" />}</td>
                <td>
                  <button onClick={()=>handleEdit(p)} className="text-blue-600 mr-2">Editar</button>
                  <button onClick={()=>handleDelete(p.id)} className="text-red-600">Excluir</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ProductManagement;