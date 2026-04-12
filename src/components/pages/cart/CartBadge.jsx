import React from 'react'

export default function CartBadge({ count }) {
//   if (!count || count === 0) return null;

  return (
    <>
    <span
      className="
      bg-red-700 text-white 
        absolute -top-1 -left-1 
        text-xs font-bold
        w-5 h-5 flex items-center justify-center 
        rounded-full shadow-md "
    >
      {count}
    </span>
    </>
  );
}


