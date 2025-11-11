"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Save, Shield, Bell, Lock } from "lucide-react"

export function Settings() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-foreground mb-2">Settings</h2>
        <p className="text-muted-foreground">Manage platform configuration and preferences</p>
      </div>

      <div className="max-w-2xl space-y-6">
        {/* General Settings */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <Shield className="w-5 h-5" />
            General Settings
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Platform Name</label>
              <input
                type="text"
                defaultValue="AniLux 3.0"
                className="w-full px-4 py-2 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Support Email</label>
              <input
                type="email"
                defaultValue="support@anilux.com"
                className="w-full px-4 py-2 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Max Upload Size (MB)</label>
              <input
                type="number"
                defaultValue="500"
                className="w-full px-4 py-2 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
        </Card>

        {/* Notification Settings */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <Bell className="w-5 h-5" />
            Notifications
          </h3>
          <div className="space-y-3">
            {[
              { label: "Email notifications", desc: "Receive email for important updates" },
              { label: "Daily digest", desc: "Get a summary of platform activity" },
              { label: "Security alerts", desc: "Notifications for security events" },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 rounded-lg hover:bg-muted">
                <div>
                  <p className="font-medium text-foreground">{item.label}</p>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
                <input type="checkbox" defaultChecked className="w-4 h-4" />
              </div>
            ))}
          </div>
        </Card>

        {/* Security Settings */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <Lock className="w-5 h-5" />
            Security
          </h3>
          <div className="space-y-4">
            <div className="p-4 bg-muted rounded-lg">
              <p className="font-medium text-foreground mb-2">Two-Factor Authentication</p>
              <p className="text-sm text-muted-foreground mb-4">Add an extra layer of security to your account</p>
              <Button variant="outline" className="text-sm bg-transparent">
                Enable 2FA
              </Button>
            </div>
            <div className="p-4 bg-muted rounded-lg">
              <p className="font-medium text-foreground mb-2">Change Password</p>
              <p className="text-sm text-muted-foreground mb-4">Update your password regularly</p>
              <Button variant="outline" className="text-sm bg-transparent">
                Change Password
              </Button>
            </div>
          </div>
        </Card>

        <div className="flex gap-3">
          <Button className="gap-2">
            <Save className="w-4 h-4" />
            Save Changes
          </Button>
          <Button variant="outline">Cancel</Button>
        </div>
      </div>
    </div>
  )
}
