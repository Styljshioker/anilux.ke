"use client"

import { Menu, Settings, Bell, User } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeaderProps {
  sidebarOpen: boolean
  onToggleSidebar: () => void
}

export function Header({ sidebarOpen, onToggleSidebar }: HeaderProps) {
  return (
    <header className="border-b border-border bg-card">
      <div className="flex items-center justify-between h-16 px-6">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={onToggleSidebar}>
            <Menu className="w-5 h-5" />
          </Button>
          <h1 className="text-xl font-bold text-foreground">AniLux 3.0</h1>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Bell className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Settings className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <User className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}
