export default function ViewUserDialog({
  selectedUser,
}) {

  if (!selectedUser) return null;

  return (
    <div className="space-y-6">

      <div className="bg-gradient-to-b from-slate-50 to-white border border-slate-200 rounded-3xl p-6 shadow-sm">
{/* 
        <div className="flex justify-center mb-6">

          <div className="w-44 h-44 rounded-3xl flex items-center justify-center p-4">

            <img
              src={selectedUser.image}
              alt={selectedUser.firstName}
              className="w-40 h-40 rounded-2xl object-cover transition-transform duration-300 hover:scale-105"
            />

          </div>

        </div> */}

        <div className="space-y-5">

          {/* Full Name */}
          <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm">

            <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1">
              Full Name
            </p>

            <h2 className="text-xl font-bold text-slate-900 leading-relaxed">

              {selectedUser.firstName}{" "}
              {selectedUser.lastName}

            </h2>

          </div>

          {/* Email */}
          <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm">

            <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1">
              Email
            </p>

            <h3 className="text-base font-medium text-slate-700 break-all">

              {selectedUser.email}

            </h3>

          </div>

          {/* Age */}
          <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm">

            <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1">
              Age
            </p>

            <h3 className="text-lg font-bold text-emerald-600">

              {selectedUser.age}

            </h3>

          </div>

          {/* Gender */}
          <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm">

            <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1">
              Gender
            </p>

            <div
              className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium capitalize
              ${
                selectedUser.gender ===
                "male"
                  ? "bg-blue-50 text-blue-700"
                  : "bg-pink-50 text-pink-600"
              }`}
            >

              {selectedUser.gender}

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}