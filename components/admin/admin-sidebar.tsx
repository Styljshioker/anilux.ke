"use client"

import { Package, Settings, Menu } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface AdminSidebarProps {
  activeTab: string
  setActiveTab: (tab: string) => void
}

export default function AdminSidebar({ activeTab, setActiveTab }: AdminSidebarProps) {
  const [isOpen, setIsOpen] = useState(true)

  const menuItems = [
    { id: "products", label: "Products", icon: Package },
    { id: "settings", label: "Store Settings", icon: Settings },
  ]

  return (
    <>
      {/* Mobile Menu Toggle */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-card border border-border rounded-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu className="h-5 w-5" />
      </button>

      {/* Sidebar */}
      <aside
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 fixed lg:relative w-64 h-screen bg-card border-r border-border transition-transform duration-300 z-40 flex flex-col`}
      >
        <div className="p-6 border-b border-border">
          <h2 className="text-xl font-bold text-foreground">AniLux</h2>
          <p className="text-xs text-muted-foreground mt-1">Admin Panel</p>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id)
                  setIsOpen(false)
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  activeTab === item.id ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-secondary"
                }`}
              >
                <Icon className="h-5 w-5" />
                <span className="font-medium">{item.label}</span>
              </button>
            )
          })}
        </nav>

        <div className="p-4 border-t border-border">
          <Link href="/" className="block w-full">
            <Button variant="outline" className="w-full gap-2 bg-transparent">
              Back to Store
            </Button>
          </Link>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {isOpen && <div className="lg:hidden fixed inset-0 bg-black/50 z-30" onClick={() => setIsOpen(false)} />}
    </>
  )
}
