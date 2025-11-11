"use client"

import { LayoutDashboard, Tv, Users, BarChart3, Settings, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface SidebarProps {
  isOpen: boolean
  onToggle: () => void
  currentPage: string
  onPageChange: (page: string) => void
}

const menuItems = [
  { id: "overview", label: "Overview", icon: LayoutDashboard },
  { id: "content", label: "Content", icon: Tv },
  { id: "users", label: "Users", icon: Users },
  { id: "analytics", label: "Analytics", icon: BarChart3 },
  { id: "settings", label: "Settings", icon: Settings },
]

export function Sidebar({ isOpen, currentPage, onPageChange }: SidebarProps) {
  return (
    <aside
      className={cn(
        "bg-sidebar border-r border-sidebar-border transition-all duration-300 flex flex-col overflow-hidden",
        isOpen ? "w-64" : "w-20",
      )}
    >
      <div className="flex items-center justify-center h-16 border-b border-sidebar-border">
        <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold">
          AL
        </div>
        {isOpen && <span className="ml-2 font-bold text-sidebar-foreground">AniLux</span>}
      </div>

      <nav className="flex-1 px-3 py-6 space-y-2">
        {menuItems.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => onPageChange(id)}
            className={cn(
              "w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
              currentPage === id
                ? "bg-sidebar-primary text-sidebar-primary-foreground"
                : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
            )}
          >
            <Icon className="w-5 h-5 flex-shrink-0" />
            {isOpen && <span className="text-sm font-medium">{label}</span>}
            {isOpen && currentPage === id && <ChevronRight className="w-4 h-4 ml-auto" />}
          </button>
        ))}
      </nav>

      <div className="border-t border-sidebar-border p-4">
        <Button variant="outline" className="w-full text-sm bg-transparent" disabled>
          {isOpen ? "Logout" : "..."}
        </Button>
      </div>
    </aside>
  )
}
