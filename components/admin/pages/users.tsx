"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, Ban, Mail } from "lucide-react"

const users = [
  { id: 1, name: "Alex Johnson", email: "alex@example.com", role: "Admin", joinDate: "2024-01-15", status: "Active" },
  { id: 2, name: "Sarah Chen", email: "sarah@example.com", role: "Editor", joinDate: "2024-02-20", status: "Active" },
  { id: 3, name: "Mike Brown", email: "mike@example.com", role: "User", joinDate: "2024-03-10", status: "Inactive" },
  { id: 4, name: "Emma Wilson", email: "emma@example.com", role: "Editor", joinDate: "2024-03-22", status: "Active" },
  { id: 5, name: "James Davis", email: "james@example.com", role: "User", joinDate: "2024-04-05", status: "Active" },
]

export function Users() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-foreground mb-2">User Management</h2>
        <p className="text-muted-foreground">Manage platform users and permissions</p>
      </div>

      <Card>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-border bg-muted">
              <tr>
                <th className="text-left px-6 py-4 font-semibold text-foreground">Name</th>
                <th className="text-left px-6 py-4 font-semibold text-foreground">Email</th>
                <th className="text-left px-6 py-4 font-semibold text-foreground">Role</th>
                <th className="text-left px-6 py-4 font-semibold text-foreground">Join Date</th>
                <th className="text-left px-6 py-4 font-semibold text-foreground">Status</th>
                <th className="text-left px-6 py-4 font-semibold text-foreground">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-muted/50 transition-colors">
                  <td className="px-6 py-4 text-foreground font-medium">{user.name}</td>
                  <td className="px-6 py-4 text-muted-foreground text-sm">{user.email}</td>
                  <td className="px-6 py-4">
                    <span className="text-xs font-semibold px-2 py-1 rounded bg-blue-100 text-blue-700">
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-muted-foreground text-sm">{user.joinDate}</td>
                  <td className="px-6 py-4">
                    <span
                      className={cn(
                        "text-xs font-semibold px-2 py-1 rounded",
                        user.status === "Active" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700",
                      )}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm" className="w-8 h-8 p-0">
                        <Shield className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="w-8 h-8 p-0">
                        <Mail className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="w-8 h-8 p-0 hover:text-destructive">
                        <Ban className="w-4 h-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}

function cn(...classes: any[]) {
  return classes.filter(Boolean).join(" ")
}
