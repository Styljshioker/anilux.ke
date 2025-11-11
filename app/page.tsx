"use client"

import { useState } from "react"
import { Navigation } from "@/components/store/navigation"
import { Hero } from "@/components/store/hero"
import { ProductShowcase } from "@/components/store/product-showcase"
import { Cart } from "@/components/store/cart"
import { Footer } from "@/components/store/footer"

export default function Home() {
  const [cartOpen, setCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])

  const handleAddToCart = (product: any) => {
    const existing = cartItems.find((item) => item.id === product.id)
    if (existing) {
      setCartItems(cartItems.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)))
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }])
    }
  }

  const handleRemoveFromCart = (productId: string) => {
    setCartItems(cartItems.filter((item) => item.id !== productId))
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation cartItems={cartItems} onCartClick={() => setCartOpen(!cartOpen)} />
      {cartOpen && <Cart items={cartItems} onRemove={handleRemoveFromCart} onClose={() => setCartOpen(false)} />}
      <Hero />
      <ProductShowcase onAddToCart={handleAddToCart} />
      <Footer />
    </div>
  )
}
