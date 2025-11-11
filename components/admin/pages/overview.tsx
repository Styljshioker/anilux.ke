"use client"

import { Card } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts"

const viewsData = [
  { month: "Jan", views: 4000, users: 2400 },
  { month: "Feb", views: 3000, users: 1398 },
  { month: "Mar", views: 2000, users: 9800 },
  { month: "Apr", views: 2780, users: 3908 },
  { month: "May", views: 1890, users: 4800 },
  { month: "Jun", views: 2390, users: 3800 },
]

const stats = [
  { label: "Total Users", value: "24,582", change: "+12.5%", positive: true },
  { label: "Active Series", value: "1,284", change: "+4.3%", positive: true },
  { label: "Total Views", value: "2.4M", change: "-2.1%", positive: false },
  { label: "Revenue", value: "$48,295", change: "+18.2%", positive: true },
]

export function Overview() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-foreground mb-2">Dashboard Overview</h2>
        <p className="text-muted-foreground">Welcome to your AniLux admin panel</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, idx) => (
          <Card key={idx} className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-2">{stat.label}</p>
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
              </div>
              <span
                className={cn(
                  "text-xs font-semibold px-2 py-1 rounded",
                  stat.positive ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700",
                )}
              >
                {stat.change}
              </span>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">Views & Users</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={viewsData}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
              <XAxis dataKey="month" stroke="var(--color-muted-foreground)" />
              <YAxis stroke="var(--color-muted-foreground)" />
              <Tooltip />
              <Bar dataKey="views" fill="var(--color-chart-1)" name="Views" />
              <Bar dataKey="users" fill="var(--color-chart-2)" name="Users" />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">Growth Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={viewsData}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
              <XAxis dataKey="month" stroke="var(--color-muted-foreground)" />
              <YAxis stroke="var(--color-muted-foreground)" />
              <Tooltip />
              <Line type="monotone" dataKey="views" stroke="var(--color-chart-1)" name="Views" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </Card>
      </div>
    </div>
  )
}

function cn(...classes: any[]) {
  return classes.filter(Boolean).join(" ")
}
