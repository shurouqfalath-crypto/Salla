import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../../../api/api";
import { Loader2 } from "lucide-react";

const DeleteProductForm = ({ setOpenDialog, selectedProduct }) => {
  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationFn: () => {
      if (!selectedProduct) return;

      return api.delete(`/products/${selectedProduct.id}`);
    },

    onSuccess: async (res) => {
      console.log("Success: Product deleted successfully", res);

      setOpenDialog(false);

      await queryClient.invalidateQueries({
        queryKey: ["products"],
      });
    },

    onError: (error) => {
      console.log(error);
    },
  });

  return (
    <div className="space-y-4">
      <p className="text-sm text-slate-600">
        Are you sure you want to delete:{" "}
        <span className="font-semibold">{selectedProduct?.title}</span>?
      </p>

      <p className="text-xs text-red-500">This action cannot be undone.</p>

      <div className="flex justify-end pt-3">
        <button
          onClick={() => deleteMutation.mutate()}
          disabled={deleteMutation.isPending}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium text-white transition

          ${
            deleteMutation.isPending
              ? "bg-slate-400"
              : "bg-red-600 hover:bg-red-700"
          }`}
        >
          {deleteMutation.isPending && (
            <Loader2 className="h-4 w-4 animate-spin" />
          )}

          {deleteMutation.isPending ? "Deleting..." : "Delete"}
        </button>
      </div>
    </div>
  );
};

export default DeleteProductForm;
