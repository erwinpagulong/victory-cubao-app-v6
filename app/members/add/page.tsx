"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ArrowLeft, Save } from "lucide-react"

export default function AddMemberPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    ministry: "",
    role: "",
    status: "Active",
    notes: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSave = () => {
    // Here you would typically save to database
    console.log("Saving member:", formData)
    router.push("/members")
  }

  const getInitials = (name: string) => {
    return name
      ? name
          .split(" ")
          .map((n) => n[0])
          .join("")
          .toUpperCase()
      : "AA"
  }

  return (
    <div className="p-6 space-y-6 min-h-screen bg-white">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/members">
            <button className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md border border-[#e4e4e4] text-[#4b4b4b] bg-transparent hover:bg-[#f4f6fa] transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Members
            </button>
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-[#171717]">Add New Member</h1>
            <p className="text-[#919499] mt-1">Fill in the information to add a new member</p>
          </div>
        </div>
        <button 
          onClick={handleSave} 
          className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md bg-[#9e56ff] hover:bg-[#491b6d] text-white transition-colors"
        >
          <Save className="w-4 h-4 mr-2" />
          Save Member
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Form */}
        <div className="lg:col-span-2 space-y-6">
          {/* Personal Information Card */}
          <div className="bg-white border border-gray-200 rounded-lg">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-[#171717]">Personal Information</h3>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-[#4b4b4b]">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="Enter full name"
                    className="w-full px-3 py-2 bg-[#f4f6fa] border-0 rounded-md focus:outline-none focus:ring-1 focus:ring-[#9e56ff] transition-shadow"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-[#4b4b4b]">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="Enter email address"
                    className="w-full px-3 py-2 bg-[#f4f6fa] border-0 rounded-md focus:outline-none focus:ring-1 focus:ring-[#9e56ff] transition-shadow"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-sm font-medium text-[#4b4b4b]">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="Enter phone number"
                    className="w-full px-3 py-2 bg-[#f4f6fa] border-0 rounded-md focus:outline-none focus:ring-1 focus:ring-[#9e56ff] transition-shadow"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="status" className="block text-sm font-medium text-[#4b4b4b]">
                    Status
                  </label>
                  <select
                    id="status"
                    value={formData.status}
                    onChange={(e) => handleInputChange("status", e.target.value)}
                    className="w-full px-3 py-2 bg-[#f4f6fa] border-0 rounded-md focus:outline-none focus:ring-1 focus:ring-[#9e56ff] transition-shadow"
                  >
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="address" className="block text-sm font-medium text-[#4b4b4b]">
                  Address
                </label>
                <textarea
                  id="address"
                  value={formData.address}
                  onChange={(e) => handleInputChange("address", e.target.value)}
                  placeholder="Enter complete address"
                  rows={3}
                  className="w-full px-3 py-2 bg-[#f4f6fa] border-0 rounded-md focus:outline-none focus:ring-1 focus:ring-[#9e56ff] transition-shadow resize-none"
                />
              </div>
            </div>
          </div>

          {/* Ministry Information Card */}
          <div className="bg-white border border-gray-200 rounded-lg">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-[#171717]">Ministry Information</h3>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="ministry" className="block text-sm font-medium text-[#4b4b4b]">
                    Ministry
                  </label>
                  <select
                    id="ministry"
                    value={formData.ministry}
                    onChange={(e) => handleInputChange("ministry", e.target.value)}
                    className="w-full px-3 py-2 bg-[#f4f6fa] border-0 rounded-md focus:outline-none focus:ring-1 focus:ring-[#9e56ff] transition-shadow"
                  >
                    <option value="">Select ministry</option>
                    <option value="Worship Team">Worship Team</option>
                    <option value="Youth Ministry">Youth Ministry</option>
                    <option value="Children's Ministry">Children's Ministry</option>
                    <option value="Prayer Team">Prayer Team</option>
                    <option value="Outreach">Outreach</option>
                    <option value="Hospitality">Hospitality</option>
                    <option value="Security Team">Security Team</option>
                    <option value="Media Team">Media Team</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="role" className="block text-sm font-medium text-[#4b4b4b]">
                    Role
                  </label>
                  <input
                    id="role"
                    type="text"
                    value={formData.role}
                    onChange={(e) => handleInputChange("role", e.target.value)}
                    placeholder="Enter role in ministry"
                    className="w-full px-3 py-2 bg-[#f4f6fa] border-0 rounded-md focus:outline-none focus:ring-1 focus:ring-[#9e56ff] transition-shadow"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="notes" className="block text-sm font-medium text-[#4b4b4b]">
                  Additional Notes
                </label>
                <textarea
                  id="notes"
                  value={formData.notes}
                  onChange={(e) => handleInputChange("notes", e.target.value)}
                  placeholder="Any additional information about the member"
                  rows={4}
                  className="w-full px-3 py-2 bg-[#f4f6fa] border-0 rounded-md focus:outline-none focus:ring-1 focus:ring-[#9e56ff] transition-shadow resize-none"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Preview Sidebar */}
        <div className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-lg">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-[#171717]">Preview</h3>
            </div>
            <div className="p-6 space-y-4">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#9e56ff] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-3">
                  {getInitials(formData.name)}
                </div>
                <h3 className="font-semibold text-[#171717]">
                  {formData.name || "Member Name"}
                </h3>
                <p className="text-sm text-[#919499]">
                  {formData.email || "email@example.com"}
                </p>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-[#919499]">Phone:</span>
                  <span className="text-[#4b4b4b]">{formData.phone || "N/A"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#919499]">Ministry:</span>
                  <span className="text-[#4b4b4b]">{formData.ministry || "N/A"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#919499]">Role:</span>
                  <span className="text-[#4b4b4b]">{formData.role || "N/A"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#919499]">Status:</span>
                  <span
                    className={`text-sm px-2 py-1 rounded ${
                      formData.status === "Active" 
                        ? "bg-[#61c556] text-white" 
                        : "bg-[#c4c4c4] text-[#4b4b4b]"
                    }`}
                  >
                    {formData.status}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}