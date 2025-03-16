"use client";

import { useState } from "react";
import Image from "next/image";

const UploadPage = () => {
  // Define the product state
  const [product, setProduct] = useState({
    name: "",
    price: "",
    colors: "",
    category: "",
    link: "",
    isNew: false,
  });

  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
    }
  };

  const handleUpload = async () => {
    if (!file) return alert("Please select a file first");

    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", product.name);
    formData.append("price", product.price);
    formData.append("colors", product.colors);
    formData.append("category", product.category);
    formData.append("link", product.link);
    formData.append("isNew", String(product.isNew));

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Upload failed");
      alert("File and product details uploaded successfully!");
    } catch (error) {
      console.error(error);
      alert("Upload failed");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-5">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Upload Product</h2>

        {/* File Upload */}
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="mb-4 w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-gray-200 file:text-gray-700 hover:file:bg-gray-300"
        />

        {preview && (
          <img src={preview} alt="Preview" className="w-full h-48 object-cover mb-4 rounded-lg" />
        )}

        {/* Product Form */}
        <div className="space-y-3">
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleInputChange}
            placeholder="Product Name"
            className="w-full p-2 border border-gray-300 rounded"
          />

          <input
            type="text"
            name="price"
            value={product.price}
            onChange={handleInputChange}
            placeholder="Price"
            className="w-full p-2 border border-gray-300 rounded"
          />

          <input
            type="text"
            name="colors"
            value={product.colors}
            onChange={handleInputChange}
            placeholder="Colors (comma-separated)"
            className="w-full p-2 border border-gray-300 rounded"
          />

          <input
            type="text"
            name="category"
            value={product.category}
            onChange={handleInputChange}
            placeholder="Category (comma-separated)"
            className="w-full p-2 border border-gray-300 rounded"
          />

          <input
            type="text"
            name="link"
            value={product.link}
            onChange={handleInputChange}
            placeholder="Product Link"
            className="w-full p-2 border border-gray-300 rounded"
          />

          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="isNew"
              checked={product.isNew}
              onChange={(e) => setProduct((prev) => ({ ...prev, isNew: e.target.checked }))}
            />
            <span>Is New Arrival?</span>
          </label>

          <button
            onClick={handleUpload}
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Upload
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadPage;