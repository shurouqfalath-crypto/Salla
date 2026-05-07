import { useState } from "react";
import { api } from "../../api/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";

const UserForm = ({ setOpenDialog }) => {
  const [form, setForm] = useState({
    firstName: "",
    email: "",
    password: "",
    age: "",
    gender: "male",
    role: "user",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    const newErrors = {};

    if (!form.firstName)
      newErrors.firstName = "First name is required";

    if (!form.email)
      newErrors.email = "Email is required";

    if (!form.age)
      newErrors.age = "Age is required";

    if (!form.password)
      newErrors.password = "Password is required";

    if (!form.gender)
      newErrors.gender = "Gender is required";

    if (!form.role)
      newErrors.role = "Role is required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const queryClient = useQueryClient();

  const userMutation = useMutation({
    mutationFn: (data) => api.post("users/add", data),

    onSuccess: async (res) => {
      console.log("Success:", res);

      setOpenDialog(false);

      await queryClient.invalidateQueries({
        queryKey: ["users"],
      });
    },

    onError: (error) => {
      console.log("Error:", error);
    },
  });

  const userIsSaving = userMutation.isPending;

  const inputClass =
    "w-full mt-1 px-3 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all duration-200";

  const labelClass =
    "text-sm font-medium text-slate-600";

  const errorClass =
    "text-xs text-red-500 mt-1";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    userMutation.mutateAsync(form);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      {/* First Name */}
      <div>
        <label className={labelClass}>
          First Name
        </label>

        <input
          name="firstName"
          value={form.firstName}
          onChange={handleChange}
          className={inputClass}
          placeholder="Enter first name"
        />

        {errors.firstName && (
          <p className={errorClass}>
            {errors.firstName}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label className={labelClass}>
          Email
        </label>

        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          className={inputClass}
          placeholder="Enter email"
        />

        {errors.email && (
          <p className={errorClass}>
            {errors.email}
          </p>
        )}
      </div>

      {/* Age + Role */}
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className={labelClass}>
            Age
          </label>

          <input
            name="age"
            type="number"
            value={form.age}
            onChange={handleChange}
            className={inputClass}
            placeholder="Age"
          />

          {errors.age && (
            <p className={errorClass}>
              {errors.age}
            </p>
          )}
        </div>

        <div>
          <label className={labelClass}>
            Role
          </label>

          <select
            name="role"
            value={form.role}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="user">
              User
            </option>

            <option value="admin">
              Admin
            </option>
          </select>

          {errors.role && (
            <p className={errorClass}>
              {errors.role}
            </p>
          )}
        </div>
      </div>

      {/* Password */}
      <div>
        <label className={labelClass}>
          Password
        </label>

        <input
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          className={inputClass}
          placeholder="Enter password"
        />

        {errors.password && (
          <p className={errorClass}>
            {errors.password}
          </p>
        )}
      </div>

      {/* Gender */}
      <div>
        <label className={labelClass}>
          Gender
        </label>

        <div className="grid grid-cols-2 gap-3 mt-2">
          {/* Male */}
          <label
            className={`flex items-center justify-center px-4 py-2.5 rounded-xl border text-sm font-medium cursor-pointer transition-all duration-200
              
              ${
                form.gender === "male"
                  ? "border-blue-500 bg-blue-500 text-white shadow-sm"
                  : "border-slate-200 text-slate-600 hover:bg-blue-50"
              }`}
          >
            <input
              type="radio"
              name="gender"
              value="male"
              checked={form.gender === "male"}
              onChange={handleChange}
              className="hidden"
            />

            Male
          </label>

          {/* Female */}
          <label
            className={`flex items-center justify-center px-4 py-2.5 rounded-xl border text-sm font-medium cursor-pointer transition-all duration-200
              
              ${
                form.gender === "female"
                  ? "border-pink-500 bg-pink-500 text-white shadow-sm"
                  : "border-slate-200 text-slate-600 hover:bg-pink-50"
              }`}
          >
            <input
              type="radio"
              name="gender"
              value="female"
              checked={form.gender === "female"}
              onChange={handleChange}
              className="hidden"
            />

            Female
          </label>
        </div>

        {errors.gender && (
          <p className={errorClass}>
            {errors.gender}
          </p>
        )}
      </div>

      {/* Actions */}
      <div className="flex justify-end pt-3">
        <button
          type="submit"
          disabled={userIsSaving}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium text-white transition-all duration-300 shadow-sm
          
          ${
            userIsSaving
              ? "bg-slate-400"
              : "bg-slate-900 hover:bg-slate-800"
          }`}
        >
          {userIsSaving && (
            <Loader2 className="h-4 w-4 animate-spin" />
          )}

          {userIsSaving
            ? "Saving..."
            : "Save User"}
        </button>
      </div>
    </form>
  );
};

export default UserForm;