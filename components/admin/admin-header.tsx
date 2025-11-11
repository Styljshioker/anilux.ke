"use client"

import { LogOut, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AdminHeader() {
  return (
    <header className="border-b border-border bg-card px-6 py-4 flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-bold text-foreground">AniLux Admin</h1>
        <p className="text-sm text-muted-foreground">Manage your premium anime merchandise store</p>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="outline" size="sm" className="gap-2 bg-transparent">
          <Settings className="h-4 w-4" />
          Profile
        </Button>
        <Button variant="ghost" size="sm" className="gap-2 text-destructive hover:text-destructive">
          <LogOut className="h-4 w-4" />
          Logout
        </Button>
      </div>
    </header>
  )
}
