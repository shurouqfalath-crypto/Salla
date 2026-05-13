import { useEffect } from "react";

const Dialog = ({
  open,
  onClose,
  children,
    // optional (for default mode)
  title,
  description,
  onConfirm,
  confirmText = "Confirm",
  cancelText = "Cancel",
  loading = false,
  variant = "primary",
}) => {
   
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose?.();
    };

    if (open) {
      document.addEventListener("keydown", handleEsc);
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [open, onClose]);

  if (!open) return null;

  const variantStyles = {
    primary:
      "bg-slate-900 hover:bg-slate-800 text-white",
    danger:
      "bg-red-600 hover:bg-red-700 text-white",
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">

      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-md rounded-3xl bg-white shadow-2xl border border-slate-200 overflow-hidden">

        {/* Header */}
        <div className="relative bg-slate-900 text-white px-5 py-4">

          {/* Cancel */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 px-3 py-1 text-xs font-medium rounded-xl bg-white/10 hover:bg-white/20 text-slate-200 transition border border-white/10"
          >
            {cancelText}
          </button>

          {title && (
            <h2 className="text-xl font-bold tracking-tight">
              {title}
            </h2>
          )}

          {description && (
            <p className="text-sm text-slate-300 mt-1">
              {description}
            </p>
          )}
        </div>

        {/* Content */}
        <div className="p-5 space-y-4">
          {children}
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 px-5 py-4 border-t border-slate-100 bg-slate-50">

          {onConfirm && (
            <button
              onClick={onConfirm}
              disabled={loading}
              className={`px-5 py-2.5 text-sm font-medium rounded-xl transition-all duration-200 shadow-sm
                ${variantStyles[variant]}
                ${
                  loading
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:scale-[1.02]"
                }`}
            >
              {loading ? "Processing..." : confirmText}
            </button>
          )}

        </div>
      </div>
    </div>
  );
};

export default Dialog;