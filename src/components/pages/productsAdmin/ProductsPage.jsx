import { PlusCircle, Eye, Pencil, Trash2 } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { api } from "../../../api/api";
import Table from "../../dashboard-components/data-table";
import Dialog from "../../dashboard-components/Dialog";
import AddProductForm from "./AddProductForm";
import DeleteProductForm from "./DeleteProductForm";
import DashbaordHeader from "../../dashboard-components/DashboardHeader";
import ViewProductDialog from "./ViewProductDialog";
import EditProductForm from "./EditProductForm";

export default function ProductPage() {
  const [openDialog, setOpenDialog] = useState(false);

  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

  const [openViewDialog, setOpenViewDialog] = useState(false);

  const [openEditDialog, setOpenEditDialog] = useState(false);

  const [selectedProduct, setSelectedProduct] = useState(null);

  const SIX_HOURS = 6 * 60 * 60 * 1000;

  const {
    data: productsData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["products"],

    queryFn: async () => {
      const res = await api.get("/products");
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
      title: "Image",
      key: "thumbnail",

      render: (_thumbnail, row) => (
        <img
          src={row.thumbnail}
          alt={row.title}
          className="w-14 h-14 rounded-lg object-cover"
        />
      ),
    },

    {
      title: "Title",
      key: "title",

      render: (_title, row) => (
        <span className="font-semibold text-slate-900">{row.title}</span>
      ),
    },

    {
      title: "Category",
      key: "category",

      render: (_category, row) => (
        <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm capitalize">
          {row.category}
        </span>
      ),
    },

    {
      title: "Price",
      key: "price",

      render: (_price, row) => (
        <span className="text-emerald-700 font-bold">${row.price}</span>
      ),
    },

    {
      title: "Actions",
      key: "actions",

      render: (_value, row) => (
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              setSelectedProduct(row);
              setOpenViewDialog(true);
            }}
            className="p-2 rounded-lg bg-slate-100 text-slate-600 hover:bg-slate-200 transition"
            title="View"
          >
            <Eye className="w-4 h-4" />
          </button>


          <button
            onClick={() => {
              setSelectedProduct(row);
              setOpenEditDialog(true);
            }}
            className="p-2 rounded-lg bg-indigo-50 text-indigo-600 hover:bg-indigo-100 transition"
            title="Edit"
          >
            <Pencil className="w-4 h-4" />
          </button>

          <button
            onClick={() => {
              setSelectedProduct(row);
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
      {/* Header */}
      <DashbaordHeader
        title="Products"
        subtitle="Manage your products"
        actions={
          <button
            onClick={() => setOpenDialog(true)}
            className="bg-slate-900 hover:bg-slate-800 text-white rounded-xl flex items-center gap-2 px-5 py-2.5 transition shadow-sm"
          >
            <PlusCircle size={18} />
            Add Product
          </button>
        }
      />

      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <Table
          columns={columns}
          data={productsData?.products}
          loading={isLoading}
          error={error?.message}
        />
      </div>

      <Dialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        title="Add Product"
        description="Add a new product"
      >
        <AddProductForm setOpenDialog={setOpenDialog} />
      </Dialog>

      {/*  الحذف حقت المنتجات  */}
      <Dialog
        open={openDeleteDialog}
        onClose={() => {
          setOpenDeleteDialog(false);
          setSelectedProduct(null);
        }}
        title="Delete Product"
        description={`Are you sure you want to delete ${selectedProduct?.title}?`}
        variant="danger"
      >
        <DeleteProductForm
          setOpenDialog={setOpenDeleteDialog}
          selectedProduct={selectedProduct}
        />
      </Dialog>

      <Dialog
        open={openViewDialog}
        onClose={() => {
          setOpenViewDialog(false);
          setSelectedProduct(null);
        }}
        title="Product Details"
        description="View product information"
      >
        <ViewProductDialog selectedProduct={selectedProduct} />
      </Dialog>

      {/*  تعديل المنتج */}
      <Dialog
        open={openEditDialog}
        onClose={() => {
          setOpenEditDialog(false);
          setSelectedProduct(null);
        }}
        title="Edit Product"
        description={`Update ${selectedProduct?.title}`}
      >
        <EditProductForm
          // key={selectedProduct?.id}
          setOpenDialog={setOpenEditDialog}
          selectedProduct={selectedProduct}
        />
      </Dialog>
    </div>
  );
}
