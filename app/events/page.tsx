"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, Plus, ChevronLeft, ChevronRight, Calendar, MapPin, Users } from "lucide-react"
import Link from "next/link"

import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"


const events = [
  {
    id: 1,
    name: "Sunday Worship Service",
    description: "Weekly worship service with praise and worship",
    date: "Dec 17, 2023",
    time: "10:00 AM",
    location: "Main Sanctuary",
    attendees: 250,
    status: "Upcoming",
  },
  {
    id: 2,
    name: "Youth Night",
    description: "Special youth gathering with games and fellowship",
    date: "Dec 15, 2023",
    time: "7:00 PM",
    location: "Youth Hall",
    attendees: 80,
    status: "Upcoming",
  },
  {
    id: 3,
    name: "Leadership Training",
    description: "Monthly leadership development session",
    date: "Dec 10, 2023",
    time: "2:00 PM",
    location: "Conference Room",
    attendees: 25,
    status: "Completed",
  },
  {
    id: 4,
    name: "Christmas Celebration",
    description: "Annual Christmas celebration with the community",
    date: "Dec 24, 2023",
    time: "6:00 PM",
    location: "Main Sanctuary",
    attendees: 400,
    status: "Upcoming",
  },
  {
    id: 5,
    name: "Prayer Meeting",
    description: "Weekly prayer and intercession gathering",
    date: "Dec 13, 2023",
    time: "7:00 PM",
    location: "Prayer Room",
    attendees: 35,
    status: "Upcoming",
  },
  {
    id: 6,
    name: "Baptism Service",
    description: "Water baptism ceremony for new believers",
    date: "Dec 3, 2023",
    time: "11:00 AM",
    location: "Baptistry",
    attendees: 15,
    status: "Completed",
  },
]

export default function EventsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10

  const filteredEvents = events.filter(
    (event) =>
      event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.location.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const totalPages = Math.ceil(filteredEvents.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedEvents = filteredEvents.slice(startIndex, startIndex + itemsPerPage)
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
              
              <div className="px-4 lg:px-4">
                {/* Events List */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-[#171717]">All Events</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#f4f6fa] border-b border-[#e4e4e4]">
                <tr>
                  <th className="text-left p-4 text-sm font-medium text-[#4b4b4b]">Event</th>
                  <th className="text-left p-4 text-sm font-medium text-[#4b4b4b]">Description</th>
                  <th className="text-left p-4 text-sm font-medium text-[#4b4b4b]">Date</th>
                  <th className="text-left p-4 text-sm font-medium text-[#4b4b4b]">Time</th>
                  <th className="text-left p-4 text-sm font-medium text-[#4b4b4b]">Location</th>
                  <th className="text-left p-4 text-sm font-medium text-[#4b4b4b]">Status</th>
                </tr>
              </thead>
              <tbody>
                {paginatedEvents.map((event, index) => (
                  <tr key={event.id} className="border-b border-[#e4e4e4] hover:bg-[#f8f8f8]">
                    <td className="p-4">
                      <div>
                        <Link href={`/events/${event.id}`} className="font-medium text-[#171717] hover:text-[#9e56ff]">
                          {event.name}
                        </Link>
                        <div className="flex items-center gap-1 mt-1">
                          <Users className="w-3 h-3 text-[#919499]" />
                          <span className="text-xs text-[#919499]">{event.attendees} attendees</span>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 text-[#4b4b4b] text-sm max-w-xs">
                      <p className="truncate">{event.description}</p>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-[#919499]" />
                        <span className="text-sm text-[#4b4b4b]">{event.date}</span>
                      </div>
                    </td>
                    <td className="p-4 text-[#4b4b4b] text-sm">{event.time}</td>
                    <td className="p-4">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-[#919499]" />
                        <span className="text-sm text-[#4b4b4b]">{event.location}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <Badge
                        variant={event.status === "Upcoming" ? "default" : "secondary"}
                        className={
                          event.status === "Upcoming"
                            ? "bg-[#02aff9] hover:bg-[#02aff9] text-white"
                            : "bg-[#61c556] hover:bg-[#61c556] text-white"
                        }
                      >
                        {event.status}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between p-4 border-t border-[#e4e4e4]">
            <div className="text-sm text-[#919499]">
              Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, filteredEvents.length)} of{" "}
              {filteredEvents.length} results
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
