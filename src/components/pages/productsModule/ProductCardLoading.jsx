import React from "react";

export default function ProductCardLoading() {
  return (
    <div className="p-4 gap-4 flex flex-col items-center justify-between rounded-lg border-2 border-gray-50 animate-pulse">

      <div className="w-full aspect-[4/3] rounded-lg overflow-hidden bg-gray-200 relative">

        <div className="absolute inset-0 bg-gray-300 opacity-60"></div>

        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-gray-600 text-sm font-medium">
            Loading...
          </span>
        </div>

      </div>

      <div className="w-full flex flex-col items-center text-center gap-2">

        <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
        <div className="h-3 w-1/2 bg-gray-200 rounded"></div>
        <div className="h-3 w-1/3 bg-gray-200 rounded"></div>

      </div>

      <div className="w-full flex justify-center">
        <div className="h-4 w-1/4 bg-gray-200 rounded"></div>
      </div>

      <div className="w-full">
        <div className="h-10 w-full bg-gray-200 rounded-md"></div>
      </div>

    </div>
  );
}