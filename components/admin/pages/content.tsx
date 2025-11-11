"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, Edit2, Trash2, Eye } from "lucide-react"

const contentItems = [
  { id: 1, title: "Attack on Titan Season 4", type: "Series", status: "Published", views: 2543, rating: 9.2 },
  { id: 2, title: "Demon Slayer Movie", type: "Movie", status: "Published", views: 1892, rating: 9.0 },
  { id: 3, title: "Jujutsu Kaisen", type: "Series", status: "Draft", views: 0, rating: 8.8 },
  { id: 4, title: "My Hero Academia", type: "Series", status: "Published", views: 3124, rating: 8.5 },
  { id: 5, title: "Chainsaw Man", type: "Series", status: "Published", views: 1456, rating: 9.1 },
]

export function Content() {
  return (
    <div className="p-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-2">Content Management</h2>
          <p className="text-muted-foreground">Manage your anime content library</p>
        </div>
        <Button className="gap-2">
          <Plus className="w-4 h-4" />
          Add Content
        </Button>
      </div>

      <Card>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-border bg-muted">
              <tr>
                <th className="text-left px-6 py-4 font-semibold text-foreground">Title</th>
                <th className="text-left px-6 py-4 font-semibold text-foreground">Type</th>
                <th className="text-left px-6 py-4 font-semibold text-foreground">Status</th>
                <th className="text-left px-6 py-4 font-semibold text-foreground">Views</th>
                <th className="text-left px-6 py-4 font-semibold text-foreground">Rating</th>
                <th className="text-left px-6 py-4 font-semibold text-foreground">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {contentItems.map((item) => (
                <tr key={item.id} className="hover:bg-muted/50 transition-colors">
                  <td className="px-6 py-4 text-foreground font-medium">{item.title}</td>
                  <td className="px-6 py-4 text-muted-foreground text-sm">{item.type}</td>
                  <td className="px-6 py-4">
                    <span
                      className={cn(
                        "text-xs font-semibold px-2 py-1 rounded",
                        item.status === "Published" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700",
                      )}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-muted-foreground text-sm">{item.views.toLocaleString()}</td>
                  <td className="px-6 py-4 text-foreground font-medium">{item.rating}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm" className="w-8 h-8 p-0">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="w-8 h-8 p-0">
                        <Edit2 className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="w-8 h-8 p-0">
                        <Trash2 className="w-4 h-4" />
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
