import { PlusCircle, Eye, Pencil, Trash2 } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { api } from "../../../api/api";
import Table from "../../dashboard-components/data-table";
import Dialog from "../../dashboard-components/Dialog";
import DashbaordHeader from "../../dashboard-components/DashboardHeader";
import AddUserForm from "./AddUserForm";
import DeleteUserForm from "./DeleteUserForm";
import ViewUserDialog from "./ViewUserDialog";
import EditUserForm from "./EditUserForm";

export default function UserPage() {
  const [openDialog, setOpenDialog] = useState(false);

  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

  const [openViewDialog, setOpenViewDialog] = useState(false);

  const [openEditDialog, setOpenEditDialog] = useState(false);

  const [selectedUser, setSelectedUser] = useState(null);

  const SIX_HOURS = 6 * 60 * 60 * 1000;

  const {
    data: usersData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["users"],

    queryFn: async () => {
      const res = await api.get("/users");
      return res.data;
    },

    staleTime: SIX_HOURS,
    cacheTime: SIX_HOURS,
  });

  const columns = [
    {
      title: "#",
      key: "id",

      render: (_id, row) => (
        <span className="text-orange-700 text-sm font-medium">{row.id}</span>
      ),
    },

    {
      title: "Name",
      key: "firstName",

      render: (_firstName, row) => (
        <span className="font-semibold text-slate-900">{row.firstName}</span>
      ),
    },

    {
      title: "Email",
      key: "email",

      render: (_email, row) => (
        <span className="text-slate-600 break-all">{row.email}</span>
      ),
    },

    {
      title: "Age",
      key: "age",

      render: (_age, row) => (
        <span className="text-emerald-700 font-semibold">{row.age}</span>
      ),
    },

    {
      title: "Gender",
      key: "gender",

      render: (_gender, row) => (
        <span
          className={`px-3 py-1 rounded-full text-sm font-medium capitalize
          ${
            row.gender === "male"
              ? "bg-blue-50 text-blue-700"
              : "bg-pink-50 text-pink-600"
          }`}
        >
          {row.gender}
        </span>
      ),
    },

    {
      title: "Actions",
      key: "actions",

      render: (_value, row) => (
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              setSelectedUser(row);
              setOpenViewDialog(true);
            }}
            className="p-2 rounded-lg bg-slate-100 text-slate-600 hover:bg-slate-200 transition"
            title="View"
          >
            <Eye className="w-4 h-4" />
          </button>

          <button
            onClick={() => {
              setSelectedUser(row);
              setOpenEditDialog(true);
            }}
            className="p-2 rounded-lg bg-indigo-50 text-indigo-600 hover:bg-indigo-100 transition"
            title="Edit"
          >
            <Pencil className="w-4 h-4" />
          </button>

          <button
            onClick={() => {
              setSelectedUser(row);
              setOpenDeleteDialog(true);
            }}
            className="p-2 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 transition"
            title="Delete"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <DashbaordHeader
        title="Users"
        subtitle="Manage your users"
        actions={
          <button
            onClick={() => setOpenDialog(true)}
            className="bg-slate-900 hover:bg-slate-800 text-white rounded-xl flex items-center gap-2 px-5 py-2.5 transition shadow-sm"
          >
            <PlusCircle size={18} />
            Add User
          </button>
        }
      />

      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <Table
          columns={columns}
          data={usersData?.users}
          loading={isLoading}
          error={error?.message}
        />
      </div>

      <Dialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        title="Add User"
        description="Add a new user"
      >
        <AddUserForm setOpenDialog={setOpenDialog} />
      </Dialog>

      <Dialog
        open={openDeleteDialog}
        onClose={() => {
          setOpenDeleteDialog(false);
          setSelectedUser(null);
        }}
        title="Delete User"
        description={`Are you sure you want to delete ${selectedUser?.firstName}?`}
        variant="danger"
      >
        <DeleteUserForm
          setOpenDialog={setOpenDeleteDialog}
          selectedUser={selectedUser}
        />
      </Dialog>

      <Dialog
        open={openViewDialog}
        onClose={() => {
          setOpenViewDialog(false);
          setSelectedUser(null);
        }}
        title="User Details"
        description="View user information"
      >
        <ViewUserDialog selectedUser={selectedUser} />
      </Dialog>

      <Dialog
        open={openEditDialog}
        onClose={() => {
          setOpenEditDialog(false);
          setSelectedUser(null);
        }}
        title="Edit User"
        description={`Update ${selectedUser?.firstName}`}
      >
        <EditUserForm
          setOpenDialog={setOpenEditDialog}
          selectedUser={selectedUser}
        />
      </Dialog>
    </div>
  );
}
