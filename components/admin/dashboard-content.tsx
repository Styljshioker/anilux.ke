"use client"

import { Overview } from "./pages/overview"
import { Content } from "./pages/content"
import { Users } from "./pages/users"
import { Analytics } from "./pages/analytics"
import { Settings } from "./pages/settings"

interface DashboardContentProps {
  currentPage: string
}

export function DashboardContent({ currentPage }: DashboardContentProps) {
  return (
    <main className="flex-1 overflow-y-auto">
      {currentPage === "overview" && <Overview />}
      {currentPage === "content" && <Content />}
      {currentPage === "users" && <Users />}
      {currentPage === "analytics" && <Analytics />}
      {currentPage === "settings" && <Settings />}
    </main>
  )
}
