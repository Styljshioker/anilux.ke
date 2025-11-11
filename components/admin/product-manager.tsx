"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Trash2, Edit2, Plus } from "lucide-react"
import Image from "next/image"
import Package from "lucide-react/dist/esm/icons/package"

interface Product {
  id: number
  name: string
  price: number
  image: string
  description: string
  category: string
  stock: number
}

interface ProductManagerProps {
  products: Product[]
  onAddProduct: (product: Omit<Product, "id">) => void
  onDeleteProduct: (id: number) => void
  onUpdateProduct: (id: number, product: Partial<Product>) => void
}

export default function ProductManager({
  products,
  onAddProduct,
  onDeleteProduct,
  onUpdateProduct,
}: ProductManagerProps) {
  const [isAdding, setIsAdding] = useState(false)
  const [editingId, setEditingId] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    category: "",
    stock: "",
    image: "",
  })

  const resetForm = () => {
    setFormData({
      name: "",
      price: "",
      description: "",
      category: "",
      stock: "",
      image: "",
    })
    setIsAdding(false)
    setEditingId(null)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (editingId) {
      onUpdateProduct(editingId, {
        name: formData.name,
        price: Number.parseFloat(formData.price),
        description: formData.description,
        category: formData.category,
        stock: Number.parseInt(formData.stock),
        image: formData.image || "/anime-merch.jpg",
      })
    } else {
      onAddProduct({
        name: formData.name,
        price: Number.parseFloat(formData.price),
        description: formData.description,
        category: formData.category,
        stock: Number.parseInt(formData.stock),
        image: formData.image || "/anime-merch.jpg",
      })
    }
    resetForm()
  }

  const handleEdit = (product: Product) => {
    setFormData({
      name: product.name,
      price: product.price.toString(),
      description: product.description,
      category: product.category,
      stock: product.stock.toString(),
      image: product.image,
    })
    setEditingId(product.id)
    setIsAdding(true)
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-3xl font-bold text-foreground">Product Management</h2>
          <p className="text-muted-foreground mt-1">Manage your anime merchandise inventory</p>
        </div>
        {!isAdding && (
          <Button onClick={() => setIsAdding(true)} className="gap-2">
            <Plus className="h-4 w-4" />
            Add Product
          </Button>
        )}
      </div>

      {/* Form Section */}
      {isAdding && (
        <Card className="p-6 mb-6 border-primary/20 bg-primary/5">
          <h3 className="text-lg font-semibold mb-4 text-foreground">
            {editingId ? "Edit Product" : "Add New Product"}
          </h3>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name" className="text-foreground">
                Product Name
              </Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g., Cosmic Hoodie"
                required
              />
            </div>

            <div>
              <Label htmlFor="category" className="text-foreground">
                Category
              </Label>
              <Input
                id="category"
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                placeholder="e.g., Hoodies"
                required
              />
            </div>

            <div>
              <Label htmlFor="price" className="text-foreground">
                Price (KES)
              </Label>
              <Input
                id="price"
                type="number"
                step="0.01"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                placeholder="89.99"
                required
              />
            </div>

            <div>
              <Label htmlFor="stock" className="text-foreground">
                Stock Quantity
              </Label>
              <Input
                id="stock"
                type="number"
                value={formData.stock}
                onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
                placeholder="15"
                required
              />
            </div>

            <div className="md:col-span-2">
              <Label htmlFor="description" className="text-foreground">
                Description
              </Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Describe your product..."
                rows={3}
                required
              />
            </div>

            <div className="md:col-span-2">
              <Label htmlFor="image" className="text-foreground">
                Image URL (leave blank for placeholder)
              </Label>
              <Input
                id="image"
                value={formData.image}
                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                placeholder="https://..."
              />
            </div>

            <div className="md:col-span-2 flex gap-2">
              <Button type="submit" className="flex-1">
                {editingId ? "Update Product" : "Add Product"}
              </Button>
              <Button type="button" variant="outline" onClick={resetForm} className="flex-1 bg-transparent">
                Cancel
              </Button>
            </div>
          </form>
        </Card>
      )}

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <Card key={product.id} className="p-4 hover:shadow-lg transition-shadow">
            <div className="relative h-40 mb-4 bg-secondary rounded-lg overflow-hidden">
              <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
            </div>
            <h3 className="font-semibold text-foreground truncate">{product.name}</h3>
            <p className="text-sm text-muted-foreground mb-2">{product.category}</p>
            <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{product.description}</p>
            <div className="flex items-center justify-between mb-3">
              <span className="text-lg font-bold text-primary">KES {product.price}</span>
              <span className="text-xs bg-secondary text-foreground px-2 py-1 rounded">Stock: {product.stock}</span>
            </div>
            <div className="flex gap-2">
              <Button size="sm" variant="outline" onClick={() => handleEdit(product)} className="flex-1 gap-2">
                <Edit2 className="h-3 w-3" />
                Edit
              </Button>
              <Button
                size="sm"
                variant="destructive"
                onClick={() => onDeleteProduct(product.id)}
                className="flex-1 gap-2"
              >
                <Trash2 className="h-3 w-3" />
                Delete
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {products.length === 0 && !isAdding && (
        <Card className="p-12 text-center border-dashed">
          <Package className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
          <p className="text-muted-foreground mb-4">No products yet. Add your first product to get started!</p>
          <Button onClick={() => setIsAdding(true)} className="gap-2">
            <Plus className="h-4 w-4" />
            Add Your First Product
          </Button>
        </Card>
      )}
    </div>
  )
}
