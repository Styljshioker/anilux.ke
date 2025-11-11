"use client"

import { useState } from "react"
import { Menu, X, ShoppingBag, Search } from "lucide-react"

interface NavigationProps {
  cartItems: any[]
  onCartClick: () => void
}

export function Navigation({ cartItems, onCartClick }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              ANILUX
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-foreground hover:text-primary transition">
              Shop
            </a>
            <a href="#" className="text-foreground hover:text-primary transition">
              Collections
            </a>
            <a href="#" className="text-foreground hover:text-primary transition">
              About
            </a>
            <a href="#" className="text-foreground hover:text-primary transition">
              Contact
            </a>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-secondary rounded-lg transition">
              <Search className="w-5 h-5" />
            </button>
            <button onClick={onCartClick} className="p-2 hover:bg-secondary rounded-lg transition relative">
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute top-1 right-1 bg-accent text-accent-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <a href="#" className="block px-4 py-2 text-foreground hover:text-primary transition">
              Shop
            </a>
            <a href="#" className="block px-4 py-2 text-foreground hover:text-primary transition">
              Collections
            </a>
            <a href="#" className="block px-4 py-2 text-foreground hover:text-primary transition">
              About
            </a>
            <a href="#" className="block px-4 py-2 text-foreground hover:text-primary transition">
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
