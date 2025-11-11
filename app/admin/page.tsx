"use client"

import { useState, useEffect } from "react"
import AdminSidebar from "@/components/admin/admin-sidebar"
import ProductManager from "@/components/admin/product-manager"
import StoreSettings from "@/components/admin/store-settings"
import AdminHeader from "@/components/admin/admin-header"

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState("products")
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Cosmic Hoodie",
      price: 89.99,
      image: "/anime-cosmic-hoodie.jpg",
      description: "Premium anime-inspired cosmic hoodie",
      category: "Hoodies",
      stock: 15,
    },
    {
      id: 2,
      name: "Character T-Shirt",
      price: 34.99,
      image: "/anime-character-tshirt.jpg",
      description: "High-quality anime character design",
      category: "T-Shirts",
      stock: 32,
    },
  ])

  const [storeInfo, setStoreInfo] = useState({
    storeName: "AniLux Premium",
    storeDescription: "The galaxy's finest anime merchandise and luxury clothing from Nairobi, Kenya",
    email: "hello@anilux.store",
    phone: "+254 7XX XXX XXX",
    location: "Nairobi, Kenya",
    instagram: "@aniluxstore",
    twitter: "@aniluxstore",
  })

  useEffect(() => {
    const savedProducts = localStorage.getItem("anilux-products")
    if (savedProducts) {
      setProducts(JSON.parse(savedProducts))
    }
    const savedStoreInfo = localStorage.getItem("anilux-store-info")
    if (savedStoreInfo) {
      setStoreInfo(JSON.parse(savedStoreInfo))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("anilux-products", JSON.stringify(products))
  }, [products])

  useEffect(() => {
    localStorage.setItem("anilux-store-info", JSON.stringify(storeInfo))
  }, [storeInfo])

  const handleAddProduct = (newProduct: any) => {
    setProducts([...products, { ...newProduct, id: Date.now() }])
  }

  const handleDeleteProduct = (id: number) => {
    setProducts(products.filter((p) => p.id !== id))
  }

  const handleUpdateProduct = (id: number, updatedProduct: any) => {
    setProducts(products.map((p) => (p.id === id ? { ...p, ...updatedProduct } : p)))
  }

  const handleUpdateStore = (updatedInfo: any) => {
    setStoreInfo(updatedInfo)
  }

  return (
    <div className="flex h-screen bg-background">
      <AdminSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <AdminHeader />
        <main className="flex-1 overflow-auto">
          {activeTab === "products" && (
            <ProductManager
              products={products}
              onAddProduct={handleAddProduct}
              onDeleteProduct={handleDeleteProduct}
              onUpdateProduct={handleUpdateProduct}
            />
          )}
          {activeTab === "settings" && <StoreSettings storeInfo={storeInfo} onUpdate={handleUpdateStore} />}
        </main>
      </div>
    </div>
  )
}
