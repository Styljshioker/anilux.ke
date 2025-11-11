"use client"

import { X, Trash2, Plus, Minus } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface CartProps {
  items: any[]
  onRemove: (id: string) => void
  onClose: () => void
}

export function Cart({ items, onRemove, onClose }: CartProps) {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40">
      <div className="fixed right-0 top-0 h-full w-full sm:w-96 bg-background shadow-2xl flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-border">
          <h2 className="text-2xl font-bold">Shopping Cart</h2>
          <button onClick={onClose} className="p-1 hover:bg-secondary rounded-lg transition">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">Your cart is empty</p>
            </div>
          ) : (
            items.map((item) => (
              <Card key={item.id} className="p-4 space-y-3">
                <div className="flex gap-4">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="font-bold text-foreground">{item.name}</h3>
                    <p className="text-sm text-muted-foreground">${item.price.toFixed(2)}</p>
                  </div>
                  <button onClick={() => onRemove(item.id)} className="p-1 hover:bg-destructive/10 rounded transition">
                    <Trash2 className="w-4 h-4 text-destructive" />
                  </button>
                </div>
                <div className="flex items-center gap-2">
                  <button className="p-1 hover:bg-secondary rounded">
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="text-sm font-semibold flex-1">{item.quantity}</span>
                  <button className="p-1 hover:bg-secondary rounded">
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </Card>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-border p-6 space-y-4">
            <div className="flex justify-between text-lg font-bold">
              <span>Total:</span>
              <span className="text-primary">${total.toFixed(2)}</span>
            </div>
            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 rounded-lg font-semibold">
              Checkout
            </Button>
            <Button variant="outline" className="w-full bg-transparent" onClick={onClose}>
              Continue Shopping
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
