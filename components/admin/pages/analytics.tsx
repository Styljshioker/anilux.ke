"use client"

import { Card } from "@/components/ui/card"
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts"

const deviceData = [
  { name: "Desktop", value: 45 },
  { name: "Mobile", value: 35 },
  { name: "Tablet", value: 20 },
]

const engagementData = [
  { day: "Mon", engagement: 65 },
  { day: "Tue", engagement: 78 },
  { day: "Wed", engagement: 72 },
  { day: "Thu", engagement: 88 },
  { day: "Fri", engagement: 85 },
  { day: "Sat", engagement: 92 },
  { day: "Sun", engagement: 70 },
]

const COLORS = ["var(--color-chart-1)", "var(--color-chart-2)", "var(--color-chart-3)"]

export function Analytics() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-foreground mb-2">Analytics</h2>
        <p className="text-muted-foreground">Platform performance metrics and user insights</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <Card className="p-6">
          <h3 className="font-semibold text-foreground mb-4">Device Distribution</h3>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={deviceData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {deviceData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="mt-4 space-y-2">
            {deviceData.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">{item.name}</span>
                <span className="font-semibold text-foreground">{item.value}%</span>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="font-semibold text-foreground mb-4">Top Genres</h3>
          <div className="space-y-4">
            {[
              { name: "Action", count: 2543 },
              { name: "Fantasy", count: 1892 },
              { name: "Romance", count: 1654 },
              { name: "Mystery", count: 1203 },
            ].map((genre, idx) => (
              <div key={idx}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-foreground">{genre.name}</span>
                  <span className="text-xs text-muted-foreground">{genre.count}</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: `${(genre.count / 2543) * 100}%` }} />
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="font-semibold text-foreground mb-4">Peak Hours</h3>
          <div className="space-y-3">
            {[
              { hour: "8 PM", users: 2890 },
              { hour: "9 PM", users: 3245 },
              { hour: "10 PM", users: 3892 },
              { hour: "11 PM", users: 2123 },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">{item.hour}</span>
                <div className="flex items-center gap-2">
                  <div className="w-16 h-2 bg-muted rounded-full overflow-hidden">
                    <div className="bg-chart-1 h-full" style={{ width: `${(item.users / 3892) * 100}%` }} />
                  </div>
                  <span className="text-sm font-medium text-foreground">{item.users}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card className="p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">User Engagement</h3>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={engagementData}>
            <defs>
              <linearGradient id="colorEngagement" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-chart-1)" stopOpacity={0.3} />
                <stop offset="95%" stopColor="var(--color-chart-1)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
            <XAxis dataKey="day" stroke="var(--color-muted-foreground)" />
            <YAxis stroke="var(--color-muted-foreground)" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="engagement"
              stroke="var(--color-chart-1)"
              fillOpacity={1}
              fill="url(#colorEngagement)"
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </Card>
    </div>
  )
}
