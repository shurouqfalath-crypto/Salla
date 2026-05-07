const DashboardHeader = ({ title, subtitle, actions }) => {
  return (
    <div className="flex items-center justify-between mb-6">

      {/* Left */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          {title}
        </h1>

        {subtitle && (
          <p className="text-sm text-slate-500 mt-1">
            {subtitle}
          </p>
        )}
      </div>

      {/* Right Actions */}
      {actions && (
        <div className="flex items-center gap-3">
          {actions}
        </div>
      )}
    </div>
  );
};

export default DashboardHeader;