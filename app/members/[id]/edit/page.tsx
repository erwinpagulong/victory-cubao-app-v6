"use client"

import { useState } from "react"
import { useRouter, useParams } from "next/navigation"
import Link from "next/link"

// Mock data - in real app, this would come from API
const memberData = {
  id: 1,
  name: "Juan Dela Cruz",
  email: "juan@example.com",
  phone: "+63 912 345 6789",
  address: "123 Main St, Cubao, Quezon City",
  status: "Active",
  ministry: "Worship Team",
  role: "Lead Vocalist",
  notes: "Experienced worship leader with strong vocal abilities.",
}

export default function EditMemberPage() {
  const router = useRouter()
  const params = useParams()
  const [formData, setFormData] = useState({
    name: memberData.name,
    email: memberData.email,
    phone: memberData.phone,
    address: memberData.address,
    ministry: memberData.ministry,
    role: memberData.role,
    status: memberData.status,
    notes: memberData.notes,
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSave = () => {
    // Here you would typically save to database
    console.log("Updating member:", formData)
    router.push(`/members/${params.id}`)
  }

  return (
    <div className="p-6 space-y-6 bg-white min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href={`/members/${params.id}`}>
            <button className="flex items-center gap-2 px-3 py-2 text-sm border border-gray-200 text-gray-600 hover:bg-gray-50 bg-transparent rounded-md transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Profile
            </button>
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Edit Member</h1>
            <p className="text-gray-500 mt-1">Update member information</p>
          </div>
        </div>
        <button 
          onClick={handleSave} 
          className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3-3m0 0l-3 3m3-3v12" />
          </svg>
          Save Changes
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Form */}
        <div className="lg:col-span-2 space-y-6">
          {/* Personal Information Card */}
          <div className="bg-white border border-gray-200 rounded-lg">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Personal Information</h2>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="w-full px-3 py-2 bg-gray-50 border-0 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="w-full px-3 py-2 bg-gray-50 border-0 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="text"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="w-full px-3 py-2 bg-gray-50 border-0 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="status" className="block text-sm font-medium text-gray-700">
                    Status
                  </label>
                  <select
                    id="status"
                    value={formData.status}
                    onChange={(e) => handleInputChange("status", e.target.value)}
                    className="w-full px-3 py-2 bg-gray-50 border-0 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                  >
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                  Address
                </label>
                <textarea
                  id="address"
                  value={formData.address}
                  onChange={(e) => handleInputChange("address", e.target.value)}
                  rows={3}
                  className="w-full px-3 py-2 bg-gray-50 border-0 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 min-h-[80px] resize-none"
                />
              </div>
            </div>
          </div>

          {/* Ministry Information Card */}
          <div className="bg-white border border-gray-200 rounded-lg">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Ministry Information</h2>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="ministry" className="block text-sm font-medium text-gray-700">
                    Ministry
                  </label>
                  <select
                    id="ministry"
                    value={formData.ministry}
                    onChange={(e) => handleInputChange("ministry", e.target.value)}
                    className="w-full px-3 py-2 bg-gray-50 border-0 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                  >
                    <option value="Worship Team">Worship Team</option>
                    <option value="Youth Ministry">Youth Ministry</option>
                    <option value="Childrens Ministry">Childrens Ministry</option>
                    <option value="Prayer Team">Prayer Team</option>
                    <option value="Outreach">Outreach</option>
                    <option value="Hospitality">Hospitality</option>
                    <option value="Security Team">Security Team</option>
                    <option value="Media Team">Media Team</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                    Role
                  </label>
                  <input
                    id="role"
                    type="text"
                    value={formData.role}
                    onChange={(e) => handleInputChange("role", e.target.value)}
                    className="w-full px-3 py-2 bg-gray-50 border-0 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="notes" className="block text-sm font-medium text-gray-700">
                  Additional Notes
                </label>
                <textarea
                  id="notes"
                  value={formData.notes}
                  onChange={(e) => handleInputChange("notes", e.target.value)}
                  rows={4}
                  className="w-full px-3 py-2 bg-gray-50 border-0 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 min-h-[100px] resize-none"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Preview Sidebar */}
        <div className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-lg">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Preview</h2>
            </div>
            <div className="p-6 space-y-4">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-3">
                  {formData.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .toUpperCase()}
                </div>
                <h3 className="font-semibold text-gray-900">{formData.name}</h3>
                <p className="text-sm text-gray-500">{formData.email}</p>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Phone:</span>
                  <span className="text-gray-700">{formData.phone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Ministry:</span>
                  <span className="text-gray-700">{formData.ministry}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Role:</span>
                  <span className="text-gray-700">{formData.role}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Status:</span>
                  <span
                    className={`text-sm px-2 py-1 rounded ${
                      formData.status === "Active" 
                        ? "bg-green-500 text-white" 
                        : "bg-gray-400 text-gray-700"
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