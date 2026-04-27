import React from 'react'
import { api } from '../api/api';
import { useQuery } from '@tanstack/react-query';

export default function TotalProducts() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await api.get("/products");
      return res.data;
    },
  });

  if (isLoading) return <p>Loading total...</p>;
  if (error) return <p>Error loading total</p>;
//   عدد المنتجات الي فالمصفوفه حقت منتجاتي
// const total = data?.products?.length;

// التوتل كله الي في الapi مو المصفوفة
const total = data?.total;
  return (
    <div className="p-3 bg-gray-50 rounded-lg shadow-md">
      <h2 className="text-lg font-bold">Total Products</h2>
      <p className="text-2xl text-gray-500 mt-2">
{total}      </p>
    </div>
  );
}
