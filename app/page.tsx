"use client"

import { useState, useEffect } from "react"
import { Navigation } from "@/components/store/navigation"
import { Hero } from "@/components/store/hero"
import { ProductShowcase } from "@/components/store/product-showcase"
import { Cart } from "@/components/store/cart"
import { Footer } from "@/components/store/footer"

export default function Home() {
  const [cartOpen, setCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [products, setProducts] = useState([
    {
      id: "1",
      name: "Celestial Hoodie",
      category: "Hoodies",
      price: 89.99,
      image: "/anime-galaxy-hoodie-cosmic.jpg",
      rating: 4.9,
      reviews: 128,
      description: "Premium anime-inspired cosmic hoodie",
      stock: 15,
    },
    {
      id: "2",
      name: "Stellar T-Shirt",
      category: "T-Shirts",
      price: 39.99,
      image: "/anime-character-tshirt-design.jpg",
      rating: 4.8,
      reviews: 96,
      description: "High-quality anime character design",
      stock: 32,
    },
    {
      id: "3",
      name: "Nebula Jacket",
      category: "Jackets",
      price: 149.99,
      image: "/luxury-anime-jacket-premium.jpg",
      rating: 5.0,
      reviews: 54,
      description: "Luxurious anime-inspired jacket",
      stock: 8,
    },
    {
      id: "4",
      name: "Aurora Cargo Pants",
      category: "Pants",
      price: 79.99,
      image: "/anime-cargo-pants-streetwear.jpg",
      rating: 4.7,
      reviews: 82,
      description: "Premium cargo pants with anime design",
      stock: 20,
    },
    {
      id: "5",
      name: "Galaxy Cap",
      category: "Accessories",
      price: 34.99,
      image: "/anime-baseball-cap-cosmic.jpg",
      rating: 4.9,
      reviews: 112,
      description: "Stylish cosmic baseball cap",
      stock: 45,
    },
    {
      id: "6",
      name: "Cosmic Sweater",
      category: "Sweaters",
      price: 69.99,
      image: "/anime-sweater-luxury-knit.jpg",
      rating: 4.8,
      reviews: 76,
      description: "Luxury knit anime sweater",
      stock: 18,
    },
    {
      id: "7",
      name: "Astral Socks Set",
      category: "Accessories",
      price: 24.99,
      image: "/anime-socks-colorful-patterns.jpg",
      rating: 4.6,
      reviews: 156,
      description: "Set of 3 colorful anime socks",
      stock: 50,
    },
    {
      id: "8",
      name: "Void Sneakers",
      category: "Footwear",
      price: 119.99,
      image: "/luxury-anime-sneakers-black.jpg",
      rating: 5.0,
      reviews: 67,
      description: "Premium luxury anime sneakers",
      stock: 12,
    },
  ])

  useEffect(() => {
    const savedCart = localStorage.getItem("anilux-cart")
    if (savedCart) {
      setCartItems(JSON.parse(savedCart))
    }
    const savedProducts = localStorage.getItem("anilux-products")
    if (savedProducts) {
      setProducts(JSON.parse(savedProducts))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("anilux-cart", JSON.stringify(cartItems))
  }, [cartItems])

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

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveFromCart(productId)
    } else {
      setCartItems(cartItems.map((item) => (item.id === productId ? { ...item, quantity } : item)))
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation cartItems={cartItems} onCartClick={() => setCartOpen(!cartOpen)} />
      {cartOpen && (
        <Cart
          items={cartItems}
          onRemove={handleRemoveFromCart}
          onClose={() => setCartOpen(false)}
          onUpdateQuantity={handleUpdateQuantity}
        />
      )}
      <Hero />
      <ProductShowcase products={products} onAddToCart={handleAddToCart} />
      <Footer />
    </div>
  )
}
