"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Save } from "lucide-react"

interface StoreInfo {
  storeName: string
  storeDescription: string
  email: string
  phone: string
  location: string
  instagram: string
  twitter: string
}

interface StoreSettingsProps {
  storeInfo: StoreInfo
  onUpdate: (info: StoreInfo) => void
}

export default function StoreSettings({ storeInfo, onUpdate }: StoreSettingsProps) {
  const [formData, setFormData] = useState(storeInfo)
  const [isSaved, setIsSaved] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onUpdate(formData)
    setIsSaved(true)
    setTimeout(() => setIsSaved(false), 3000)
  }

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-foreground">Store Settings</h2>
        <p className="text-muted-foreground mt-1">Manage your AniLux store information</p>
      </div>

      <Card className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Store Name */}
          <div>
            <Label htmlFor="storeName" className="text-foreground">
              Store Name
            </Label>
            <Input
              id="storeName"
              value={formData.storeName}
              onChange={(e) => setFormData({ ...formData, storeName: e.target.value })}
              placeholder="AniLux Premium"
            />
          </div>

          {/* Store Description */}
          <div>
            <Label htmlFor="storeDescription" className="text-foreground">
              Store Description
            </Label>
            <Textarea
              id="storeDescription"
              value={formData.storeDescription}
              onChange={(e) => setFormData({ ...formData, storeDescription: e.target.value })}
              placeholder="Describe your store..."
              rows={4}
            />
          </div>

          {/* Location */}
          <div>
            <Label htmlFor="location" className="text-foreground">
              Location
            </Label>
            <Input
              id="location"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              placeholder="Nairobi, Kenya"
            />
          </div>

          {/* Email */}
          <div>
            <Label htmlFor="email" className="text-foreground">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="hello@anilux.store"
            />
          </div>

          {/* Phone */}
          <div>
            <Label htmlFor="phone" className="text-foreground">
              Phone Number
            </Label>
            <Input
              id="phone"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="+254 7XX XXX XXX"
            />
          </div>

          {/* Social Media */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="instagram" className="text-foreground">
                Instagram
              </Label>
              <Input
                id="instagram"
                value={formData.instagram}
                onChange={(e) => setFormData({ ...formData, instagram: e.target.value })}
                placeholder="@aniluxstore"
              />
            </div>

            <div>
              <Label htmlFor="twitter" className="text-foreground">
                Twitter/X
              </Label>
              <Input
                id="twitter"
                value={formData.twitter}
                onChange={(e) => setFormData({ ...formData, twitter: e.target.value })}
                placeholder="@aniluxstore"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-4 flex gap-4">
            <Button type="submit" className="gap-2 flex-1 md:flex-none">
              <Save className="h-4 w-4" />
              Save Changes
            </Button>
            {isSaved && <div className="flex items-center text-green-600 text-sm">✓ Changes saved successfully!</div>}
          </div>
        </form>
      </Card>

      {/* Info Preview */}
      <Card className="p-6 mt-6 bg-secondary/50">
        <h3 className="font-semibold text-foreground mb-4">Preview</h3>
        <div className="space-y-2 text-sm">
          <p>
            <span className="font-medium text-foreground">Store:</span>{" "}
            <span className="text-muted-foreground">{formData.storeName}</span>
          </p>
          <p>
            <span className="font-medium text-foreground">Location:</span>{" "}
            <span className="text-muted-foreground">{formData.location}</span>
          </p>
          <p>
            <span className="font-medium text-foreground">Email:</span>{" "}
            <span className="text-muted-foreground">{formData.email}</span>
          </p>
          <p>
            <span className="font-medium text-foreground">Phone:</span>{" "}
            <span className="text-muted-foreground">{formData.phone}</span>
          </p>
        </div>
      </Card>
    </div>
  )
}
