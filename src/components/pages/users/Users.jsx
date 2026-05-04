import { useQuery } from "@tanstack/react-query";
import React from "react";
import { api } from "../../../api/api";

export default function Users() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await api.get("users");
      return res.data;
    },
  });

  if (isLoading)
    return (
      <p className="p-8 text-gray-400 font-medium text-center">
        Loading users...
      </p>
    );

  if (error)
    return (
      <p className="p-8 text-red-500 font-medium text-center">
        Failed to load users
      </p>
    );

  return (
    <div className="w-full px-4 md:px-6 mt-8">
      <div className="flex items-center justify-between">
        <h2 className=" mb-6  text-2xl font-bold text-emerald-800">
          {" "}
          All users
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {data?.users?.map((user) => (
          <div
            key={user.id}
            className="group relative p-5 bg-gray-200 border border-gray-100 rounded-2xl shadow-sm hover:shadow-lg "
          >
            <span className="absolute top-3  right-3 bg-gray-300 text-black text-xs px-2  rounded-md ">
              {user.id}
            </span>

            <div className="flex flex-col gap-2">
              {/* <p className="text-mauve-900">
               <span className="text-indigo-800"> Name:</span> {user.firstName} {user.lastName}
              </p> */}

              <p className="text-mauve-900">
                <span className="text-indigo-800"> Username:</span>
                {user.username}
              </p>

              <p className="text-sm text-red-700">
                <span className="text-indigo-800"> Email:</span> {user.email}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
