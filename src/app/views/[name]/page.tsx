"use client";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProductPage = () => {
  const searchParams = useSearchParams();
  
  // Extract data from the query parameters
  const name = searchParams.get("id");
  const price = searchParams.get("price") || "N/A";
  const image = searchParams.get("image") || "/default.jpg";
  const category = searchParams.get("category") || "Unknown";
  const colors = searchParams.get("colors") ? JSON.parse(searchParams.get("colors")!) : [];

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image Section */}
        <div className="relative w-full h-96 sm:h-[500px]">
          <Image src={image} alt={name || "Product"} fill className="object-cover rounded-lg" />
        </div>

        {/* Product Details */}
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold">{name}</h1>
          <p className="text-gray-500 text-lg">{category}</p>
          <p className="text-gray-900 text-xl font-semibold mt-2">{price}</p>

          {/* Colors */}
          <div className="mt-4">
            <p className="text-gray-600">Available Colors:</p>
            <div className="flex gap-2 mt-2">
              {colors.map((color: string, index: number) => (
                <div key={index} className="w-6 h-6 border border-gray-400 rounded" style={{ backgroundColor: color }} />
              ))}
            </div>
          </div>

          {/* Add to Cart */}
          <button className="mt-6 px-6 py-3 bg-black text-white flex items-center gap-2 rounded-md hover:bg-gray-800 transition">
            <ShoppingCartIcon className="w-5 h-5" />
            Add to Cart
          </button>

          {/* Back to Shop */}
          <Link href="/">
            <p className="mt-4 text-blue-500 hover:underline cursor-pointer">Back to Shop</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;