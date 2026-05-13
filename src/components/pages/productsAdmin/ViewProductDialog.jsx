export default function ViewProductDialog({
  selectedProduct,
}) {
  if (!selectedProduct) return null;

  return (
    <div className="space-y-6">

      <div className="bg-gradient-to-b from-slate-50 to-white border border-slate-200 rounded-3xl p-6 shadow-sm">

        <div className="flex justify-center mb-6">
          <div className="w-44 h-44 rounded-3xl flex items-center justify-center p-4">
            <img
              src={selectedProduct.thumbnail}
              alt={selectedProduct.title}
              className="max-w-full max-h-full object-contain transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>

        <div className="space-y-5">

          <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm">
            <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1">
              Product Title
            </p>

            <h2 className="text-xl font-bold text-slate-900 leading-relaxed">
              {selectedProduct.title}
            </h2>
          </div>

          <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm">
            <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1">
              Category
            </p>

            <div className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm font-medium capitalize">
              {selectedProduct.category}
            </div>
          </div>

          <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm">
            <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1">
              Price
            </p>

            <h3 className="text-2xl font-extrabold text-emerald-600">
              ${selectedProduct.price}
            </h3>
          </div>

        </div>
      </div>
    </div>
  );
}