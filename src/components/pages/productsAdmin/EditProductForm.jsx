import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../../../api/api";
import { Loader2 } from "lucide-react";
import { useState } from "react";

export default function EditProductForm({ setOpenDialog, selectedProduct }) {
  const [form, setForm] = useState({
    title: selectedProduct?.title || "",
    price: selectedProduct?.price || "",
    category: selectedProduct?.category || "",
    thumbnail: selectedProduct?.thumbnail || "",
  });

  const [errors, setErrors] = useState({});
  const queryClient = useQueryClient();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    const newErrors = {};

    if (!form.title) newErrors.title = "Title is required";
    if (!form.price) newErrors.price = "Price is required";
    if (!form.category) newErrors.category = "Category is required";
    if (!form.thumbnail) newErrors.thumbnail = "Image URL is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const editProductMutation = useMutation({
    mutationFn: async (updatedProduct) => {
      const res = await api.put(`/products/${selectedProduct.id}`, updatedProduct);
      return res.data;
    },

    onSuccess: async (data) => {
      console.log("Product Updated:", data);

      setOpenDialog(false);

      await queryClient.invalidateQueries({
        queryKey: ["products"],
      });
    },

    onError: (error) => {
      console.log("Error:", error);
    },
  });

  const isSaving = editProductMutation.isPending;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    editProductMutation.mutate(form);
  };

  const inputClass =
    "w-full mt-1 px-3 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all duration-200";

  const labelClass = "text-sm font-medium text-slate-600";

  const errorClass = "text-xs text-red-500 mt-1";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className={labelClass}>Product Title</label>
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Enter product title"
          className={inputClass}
        />
        {errors.title && <p className={errorClass}>{errors.title}</p>}
      </div>

      <div>
        <label className={labelClass}>Price</label>
        <input
          type="number"
          name="price"
          value={form.price}
          onChange={handleChange}
          placeholder="Enter product price"
          className={inputClass}
        />
        {errors.price && <p className={errorClass}>{errors.price}</p>}
      </div>

      <div>
        <label className={labelClass}>Category</label>
        <input
          type="text"
          name="category"
          value={form.category}
          onChange={handleChange}
          placeholder="Enter category"
          className={inputClass}
        />
        {errors.category && <p className={errorClass}>{errors.category}</p>}
      </div>

      <div>
        <label className={labelClass}>Image URL</label>
        <input
          type="text"
          name="thumbnail"
          value={form.thumbnail}
          onChange={handleChange}
          placeholder="Enter image URL"
          className={inputClass}
        />
        {errors.thumbnail && <p className={errorClass}>{errors.thumbnail}</p>}
      </div>
      <p className="text-xs text-red-500">This action cannot be undone.</p>

      <div className="flex justify-end pt-2">
        <button
          type="submit"
          disabled={isSaving}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium text-white transition-all duration-300 shadow-sm
          ${isSaving ? "bg-slate-400" : "bg-slate-900 hover:bg-slate-800"}`}
        >
          {isSaving && <Loader2 className="w-4 h-4 animate-spin" />}
          {isSaving ? "Updating..." : "Update Product"}
        </button>
      </div>
    </form>
  );
}
