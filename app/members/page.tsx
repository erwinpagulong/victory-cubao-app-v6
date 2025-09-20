"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, Filter, Plus, ChevronLeft, ChevronRight, ChevronLeftIcon, ChevronRightIcon } from "lucide-react"
import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"

const members = [
  {
    id: 1,
    name: "Juan Dela Cruz",
    username: "@juandelacruz",
    accountManager: "Maria Santos",
    account: "Active",
    ministry: "Worship Team",
  },
  {
    id: 2,
    name: "Maria Garcia",
    username: "@mariagarcia",
    accountManager: "John Smith",
    account: "Active",
    ministry: "Youth Ministry",
  },
  {
    id: 3,
    name: "Pedro Rodriguez",
    username: "@pedrorodriguez",
    accountManager: "Sarah Johnson",
    account: "Inactive",
    ministry: "Children's Ministry",
  },
  {
    id: 4,
    name: "Ana Martinez",
    username: "@anamartinez",
    accountManager: "Mike Wilson",
    account: "Active",
    ministry: "Prayer Team",
  },
  {
    id: 5,
    name: "Carlos Lopez",
    username: "@carloslopez",
    accountManager: "Lisa Brown",
    account: "Active",
    ministry: "Outreach",
  },
  {
    id: 6,
    name: "Sofia Hernandez",
    username: "@sofiahernandez",
    accountManager: "David Lee",
    account: "Active",
    ministry: "Hospitality",
  },
  {
    id: 7,
    name: "Miguel Torres",
    username: "@migueltorres",
    accountManager: "Emma Davis",
    account: "Inactive",
    ministry: "Security Team",
  },
  {
    id: 8,
    name: "Isabella Flores",
    username: "@isabellaflores",
    accountManager: "James Miller",
    account: "Active",
    ministry: "Media Team",
  },
]

export default function MembersPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10

  const filteredMembers = members.filter(
    (member) =>
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.ministry.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const totalPages = Math.ceil(filteredMembers.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedMembers = filteredMembers.slice(startIndex, startIndex + itemsPerPage)

  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">              
              <div className="px-4 lg:px-6">
                {/* Member List */}
                <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
                    <div className="px-6 py-4 border-b border-gray-200">
                        <h2 className="text-lg font-semibold text-gray-900">Member List</h2>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-50 border-b border-gray-200">
                            <tr>
                                <th className="text-left p-4 text-sm font-medium text-gray-600">Name</th>
                                <th className="text-left p-4 text-sm font-medium text-gray-600">Username</th>
                                <th className="text-left p-4 text-sm font-medium text-gray-600">Account Manager</th>
                                <th className="text-left p-4 text-sm font-medium text-gray-600">Account</th>
                                <th className="text-left p-4 text-sm font-medium text-gray-600">Ministry</th>
                            </tr>
                            </thead>
                            <tbody>
                            {paginatedMembers.map((member) => (
                                <tr key={member.id} className="border-b border-gray-200 hover:bg-gray-50 transition-colors duration-150">
                                <td className="p-4">
                                    <Link 
                                    href={`/members/${member.id}`} 
                                    className="font-medium text-gray-900 hover:text-purple-600 transition-colors duration-200"
                                    >
                                    {member.name}
                                    </Link>
                                </td>
                                <td className="p-4 text-gray-500 text-sm">{member.username}</td>
                                <td className="p-4 text-gray-600 text-sm">{member.accountManager}</td>
                                <td className="p-4">
                                    <span
                                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                        member.account === "Active"
                                        ? "bg-green-100 text-green-800"
                                        : "bg-gray-100 text-gray-600"
                                    }`}
                                    >
                                    {member.account}
                                    </span>
                                </td>
                                <td className="p-4 text-gray-600 text-sm">{member.ministry}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                    {/* Pagination */}
                    <div className="flex items-center justify-between p-4 border-t border-gray-200">
                    <div className="text-sm text-gray-500">
                        Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, filteredMembers.length)} of{" "}
                        {filteredMembers.length} results
                    </div>
                    <div className="flex items-center gap-2">
                        <button
                        onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                        disabled={currentPage === 1}
                        className="inline-flex items-center px-3 py-2 border border-gray-200 text-gray-600 bg-white hover:bg-gray-50 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                        >
                        <ChevronLeftIcon />
                        </button>
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <button
                            key={page}
                            onClick={() => setCurrentPage(page)}
                            className={`inline-flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                            currentPage === page
                                ? "bg-purple-600 text-white hover:bg-purple-800"
                                : "border border-gray-200 text-gray-600 bg-white hover:bg-gray-50"
                            }`}
                        >
                            {page}
                        </button>
                        ))}
                        <button
                        onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                        disabled={currentPage === totalPages}
                        className="inline-flex items-center px-3 py-2 border border-gray-200 text-gray-600 bg-white hover:bg-gray-50 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                        >
                        <ChevronRightIcon />
                        </button>
                    </div>
                    </div>
                </div>
              </div>              
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
