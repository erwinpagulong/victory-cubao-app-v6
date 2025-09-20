"use client"

import { useState} from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, Plus, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"

const students = [
  {
    id: 1,
    name: "Sarah Johnson",
    username: "@sarahjohnson",
    training: "Discipleship 101",
    account: "Active",
    ministry: "Youth Ministry",
  },
  {
    id: 2,
    name: "Michael Chen",
    username: "@michaelchen",
    training: "Leadership Development",
    account: "Active",
    ministry: "Children's Ministry",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    username: "@emilyrodriguez",
    training: "Worship Training",
    account: "Inactive",
    ministry: "Worship Team",
  },
  {
    id: 4,
    name: "David Kim",
    username: "@davidkim",
    training: "Ministry Foundations",
    account: "Active",
    ministry: "Outreach",
  },
  {
    id: 5,
    name: "Jessica Brown",
    username: "@jessicabrown",
    training: "Prayer Ministry",
    account: "Active",
    ministry: "Prayer Team",
  },
  {
    id: 6,
    name: "Ryan Martinez",
    username: "@ryanmartinez",
    training: "Discipleship 101",
    account: "Active",
    ministry: "Youth Ministry",
  },
  {
    id: 7,
    name: "Amanda Wilson",
    username: "@amandawilson",
    training: "Leadership Development",
    account: "Inactive",
    ministry: "Hospitality",
  },
  {
    id: 8,
    name: "Kevin Lee",
    username: "@kevinlee",
    training: "Media Training",
    account: "Active",
    ministry: "Media Team",
  },
]

export default function Studentspage() {
    const [searchTerm, setSearchTerm] = useState("")
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 10

    const filteredStudents = students.filter(
        (student) =>
        student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.training.toLowerCase().includes(searchTerm.toLowerCase()),
    )

    const totalPages = Math.ceil(filteredStudents.length / itemsPerPage)
    const startIndex = (currentPage - 1) * itemsPerPage
    const paginatedStudents = filteredStudents.slice(startIndex, startIndex + itemsPerPage)
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
                            
                        {/* Student List */}
                              <Card>
                                <CardHeader>
                                  <CardTitle className="text-lg font-semibold text-[#171717]">Student List</CardTitle>
                                </CardHeader>
                                <CardContent className="p-0">
                                  <div className="overflow-x-auto">
                                    <table className="w-full">
                                      <thead className="bg-[#f4f6fa] border-b border-[#e4e4e4]">
                                        <tr>
                                          <th className="text-left p-4 text-sm font-medium text-[#4b4b4b]">Name</th>
                                          <th className="text-left p-4 text-sm font-medium text-[#4b4b4b]">Username</th>
                                          <th className="text-left p-4 text-sm font-medium text-[#4b4b4b]">Training</th>
                                          <th className="text-left p-4 text-sm font-medium text-[#4b4b4b]">Account</th>
                                          <th className="text-left p-4 text-sm font-medium text-[#4b4b4b]">Ministry</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        {paginatedStudents.map((student, index) => (
                                          <tr key={student.id} className="border-b border-[#e4e4e4] hover:bg-[#f8f8f8]">
                                            <td className="p-4">
                                              <Link
                                                href={`/students/${student.id}`}
                                                className="font-medium text-[#171717] hover:text-[#9e56ff]"
                                              >
                                                {student.name}
                                              </Link>
                                            </td>
                                            <td className="p-4 text-[#919499] text-sm">{student.username}</td>
                                            <td className="p-4 text-[#4b4b4b] text-sm">{student.training}</td>
                                            <td className="p-4">
                                              <Badge
                                                variant={student.account === "Active" ? "default" : "secondary"}
                                                className={
                                                  student.account === "Active"
                                                    ? "bg-[#61c556] hover:bg-[#61c556] text-white"
                                                    : "bg-[#c4c4c4] hover:bg-[#c4c4c4] text-[#4b4b4b]"
                                                }
                                              >
                                                {student.account}
                                              </Badge>
                                            </td>
                                            <td className="p-4 text-[#4b4b4b] text-sm">{student.ministry}</td>
                                          </tr>
                                        ))}
                                      </tbody>
                                    </table>
                                  </div>

                                  {/* Pagination */}
                                  <div className="flex items-center justify-between p-4 border-t border-[#e4e4e4]">
                                    <div className="text-sm text-[#919499]">
                                      Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, filteredStudents.length)} of{" "}
                                      {filteredStudents.length} results
                                    </div>
                                    <div className="flex items-center gap-2">
                                      <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                                        disabled={currentPage === 1}
                                        className="border-[#e4e4e4] text-[#4b4b4b] hover:bg-[#f4f6fa]"
                                      >
                                        <ChevronLeft className="w-4 h-4" />
                                      </Button>
                                      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                        <Button
                                          key={page}
                                          variant={currentPage === page ? "default" : "outline"}
                                          size="sm"
                                          onClick={() => setCurrentPage(page)}
                                          className={
                                            currentPage === page
                                              ? "bg-[#9e56ff] hover:bg-[#491b6d] text-white"
                                              : "border-[#e4e4e4] text-[#4b4b4b] hover:bg-[#f4f6fa]"
                                          }
                                        >
                                          {page}
                                        </Button>
                                      ))}
                                      <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                                        disabled={currentPage === totalPages}
                                        className="border-[#e4e4e4] text-[#4b4b4b] hover:bg-[#f4f6fa]"
                                      >
                                        <ChevronRight className="w-4 h-4" />
                                      </Button>
                                    </div>
                                  </div>
                                </CardContent>
                              </Card>                            
                                              
                        </div>
                    </div>              
                </div>
            </div>            
        </SidebarInset>
    </SidebarProvider>        
    )
}

