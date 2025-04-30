import React, { useEffect, useState } from "react";
// Importe os serviços de categoria quando disponíveis
// import { getCategories, createCategory, updateCategory, deleteCategory } from "@/services/categoryService";

const mockCategories = [
  { id: 1, name: "Hardware" },
  { id: 2, name: "Software" }
];

const CategoryManagement: React.FC = () => {
  const [categories, setCategories] = useState<any[]>([]);
  const [editing, setEditing] = useState<any | null>(null);
  const [form, setForm] = useState({ name: "" });
  const [loading, setLoading] = useState(false);

  // Substitua pelo fetch real quando o serviço estiver pronto
  const fetchCategories = async () => {
    setLoading(true);
    // const data = await getCategories();
    // setCategories(data || []);
    setCategories(mockCategories);
    setLoading(false);
  };

  useEffect(() => { fetchCategories(); }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleEdit = (category: any) => {
    setEditing(category);
    setForm({ name: category.name });
  };

  const handleDelete = async (id: number) => {
    // await deleteCategory(id);
    fetchCategories();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editing) {
      // await updateCategory(editing.id, form);
    } else {
      // await createCategory(form);
    }
    setForm({ name: "" });
    setEditing(null);
    fetchCategories();
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="mb-6 space-y-2">
        <input name="name" value={form.name} onChange={handleChange} placeholder="Nome da Categoria" className="w-full border p-2 rounded" required />
        <button type="submit" className="bg-tech-blue text-white px-4 py-2 rounded">{editing ? "Atualizar" : "Adicionar"}</button>
        {editing && <button type="button" className="ml-2 text-gray-500" onClick={()=>{setEditing(null);setForm({name:""});}}>Cancelar</button>}
      </form>
      {loading ? <p>Carregando categorias...</p> : (
        <table className="w-full text-left">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((c) => (
              <tr key={c.id}>
                <td>{c.name}</td>
                <td>
                  <button onClick={()=>handleEdit(c)} className="text-blue-600 mr-2">Editar</button>
                  <button onClick={()=>handleDelete(c.id)} className="text-red-600">Excluir</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default CategoryManagement;