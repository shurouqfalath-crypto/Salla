import React from 'react'

export default function MinusButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="px-2 text-md text-gray-500"
    >
      -
    </button>
  );
}

