import { PlusCircle } from 'lucide-react';
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { api } from "../../../api/api";
import Table from "../../dashboard-components/data-table";
import UserForm from "../../dashboard-components/AddUserForm";
import Dialog from "../../dashboard-components/Dialog";
import DashbaordHeader from "../../dashboard-components/DashboardHeader";

export default function UserPage() {
  const [openDialog, setOpenDialog] = useState(false);

  const SIX_HOURS = 6 * 60 * 60 * 1000;

  const { data: usersData, isLoading, error } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await api.get('/users')
      return res.data
    },
    staleTime: SIX_HOURS,
    cacheTime: SIX_HOURS,
  });

  const columns = [
    {
      title: '#',
      key: 'id',
      render: (row) => (
        <div className="flex flex-col">
          
          <span className="text-slate-700 font-medium">{row.id}</span>
        </div>
      )
    },

    {
      title: 'Name',
      key: 'firstName',
      render: (_name, row) => (
        <div className="flex flex-col">
          <span className="text-slate-900 font-semibold">
            {row.firstName}
          </span>
        </div>
      )
    },

    {
      title: 'Email',
      key: 'email',
      render: (_email, row) => (
        <div className="flex flex-col">
          <span className="text-slate-600 break-all">
            {row.email}
          </span>
        </div>
      )
    },

    {
      title: 'Age',
      key: 'age',
      render: (_role, row) => (
        <div className="flex flex-col gap-1">
          <span className=" text-emerald-700 text-sm font-semibold ">
            {row.age}
          </span>
        </div>
      )
    },

    {
      title: 'Gender',
      key: 'gender',
      render: (_role, row) => (
        <div className="flex flex-col gap-1">

          <span className={`w-fit px-3 py-1 rounded-full text-sm font-medium shadow-sm
            ${row.gender === "male"
              ? "bg-blue-50 text-blue-700"
              : "bg-pink-50 text-pink-600"
            }`}>
            {row.gender}
          </span>
        </div>
      )
    },
  ];

  return (
    <div className="space-y-6">

      {/* Header */}
      <DashbaordHeader
        title="Users"
        subtitle="Manage your users"
        actions={
          <button
            onClick={() => setOpenDialog(true)}
            className="bg-slate-900 hover:bg-slate-800 text-white rounded-xl flex items-center gap-2 px-5 py-2.5 transition shadow-sm"
          >
            <PlusCircle size={18} />
            Add user
          </button>
        }
      />

      {/* Table container (aligned with new design system) */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <Table
          columns={columns}
          data={usersData?.users}
          loading={isLoading}
          error={error?.message}
        />
      </div>

      {/* Dialog */}
      <Dialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        title="Add user"
        description="Add a new user"
        loading={false}
      >
        <UserForm setOpenDialog={setOpenDialog} />
      </Dialog>

    </div>
  );
}