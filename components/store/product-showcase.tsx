"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"

interface ProductShowcaseProps {
  products: any[]
  onAddToCart: (product: any) => void
}

export function ProductShowcase({ products, onAddToCart }: ProductShowcaseProps) {
  const [favorites, setFavorites] = useState<string[]>([])

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => (prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id]))
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-widest">Featured Collection</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-foreground">Curated for You</h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hand-selected anime merchandise that defines luxury and style
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
              {/* Image Container */}
              <div className="relative overflow-hidden bg-secondary h-64">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <button
                  onClick={() => toggleFavorite(product.id)}
                  className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:scale-110 transition"
                >
                  <Heart
                    className={`w-5 h-5 transition-colors ${
                      favorites.includes(product.id) ? "fill-red-500 text-red-500" : "text-foreground"
                    }`}
                  />
                </button>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
              </div>

              {/* Product Info */}
              <div className="p-4 space-y-4">
                <div>
                  <p className="text-sm text-primary font-semibold uppercase tracking-wide">{product.category}</p>
                  <h4 className="text-lg font-bold text-foreground mt-1">{product.name}</h4>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={`text-lg ${i < Math.floor(product.rating) ? "text-accent" : "text-muted"}`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">({product.reviews})</span>
                </div>

                {/* Price & Button */}
                <div className="flex justify-between items-center pt-2 border-t border-border">
                  <span className="text-2xl font-bold text-primary">${product.price.toFixed(2)}</span>
                  <Button
                    onClick={() => onAddToCart(product)}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                    size="sm"
                  >
                    Add
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <button className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition">
            View All Products
          </button>
        </div>
      </div>
    </section>
  )
}
