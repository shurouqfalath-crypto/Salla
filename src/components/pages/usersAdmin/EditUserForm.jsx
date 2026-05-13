import { useMutation, useQueryClient } from "@tanstack/react-query";

import { api } from "../../../api/api";

import { Loader2 } from "lucide-react";

import { useState } from "react";

export default function EditUserForm({ setOpenDialog, selectedUser }) {
  
    const [form, setForm] = useState({
    firstName: selectedUser?.firstName || "",
    email: selectedUser?.email || "",
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

    if (!form.firstName) newErrors.firstName = "First name is required";

    if (!form.email) newErrors.email = "Email is required";

    if (!form.image) newErrors.image = "Image URL is required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const editUserMutation = useMutation({
    mutationFn: async (updatedUser) => {
      const res = await api.put(`/users/${selectedUser.id}`, updatedUser);

      return res.data;
    },

    onSuccess: async (data) => {
      console.log("User Updated:", data);

      setOpenDialog(false);

      await queryClient.invalidateQueries({
        queryKey: ["users"],
      });
    },

    onError: (error) => {
      console.log("Error:", error);
    },
  });

  const isSaving = editUserMutation.isPending;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    editUserMutation.mutate(form);
  };

  const inputClass =
    "w-full mt-1 px-3 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all duration-200";

  const labelClass = "text-sm font-medium text-slate-600";

  const errorClass = "text-xs text-red-500 mt-1";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className={labelClass}>Name</label>

        <input
          type="text"
          name="firstName"
          value={form.firstName}
          onChange={handleChange}
          placeholder="Enter first name"
          className={inputClass}
        />

        {errors.firstName && <p className={errorClass}>{errors.firstName}</p>}
      </div>

      <div>
        <label className={labelClass}>Email</label>

        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Enter email"
          className={inputClass}
        />

        {errors.email && <p className={errorClass}>{errors.email}</p>}
      </div>

      <div>
        <label className={labelClass}>Image URL</label>

        <input
          type="url"
          name="image"
          value={form.image}
          onChange={handleChange}
          placeholder="Enter image URL"
          className={inputClass}
        />

        {errors.image && <p className={errorClass}>{errors.image}</p>}
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

          {isSaving ? "Updating..." : "Update User"}
        </button>
      </div>
    </form>
  );
}
