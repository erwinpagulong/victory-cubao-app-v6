"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Edit, Mail, Phone, MapPin, Calendar } from "lucide-react"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const memberData = {
  id: 1,
  name: "Juan Dela Cruz",
  email: "juan@example.com",
  phone: "+63 912 345 6789",
  address: "123 Main St, Cubao, Quezon City",
  joinDate: "January 15, 2020",
  status: "Active",
  ministry: "Worship Team",
  role: "Lead Vocalist",
  trainingsAttended: [
    { name: "Worship Training", date: "March 2023", status: "Completed" },
    { name: "Leadership Development", date: "June 2023", status: "Completed" },
    { name: "Discipleship 101", date: "September 2023", status: "In Progress" },
    { name: "Ministry Foundations", date: "December 2023", status: "Upcoming" },
  ],
  ministries: [
    { name: "Worship Team", role: "Lead Vocalist", since: "2020" },
    { name: "Youth Ministry", role: "Volunteer", since: "2021" },
  ],
}

export default function MemberProfilePage() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/members">
            <Button
              variant="outline"
              size="sm"
              className="border-[#e4e4e4] text-[#4b4b4b] hover:bg-[#f4f6fa] bg-transparent"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-[#171717]">Member Profile</h1>
            <p className="text-[#919499] mt-1">View and manage member information</p>
          </div>
        </div>
        <Button className="bg-[#9e56ff] hover:bg-[#491b6d] text-white" asChild>
          <Link href={`/members/${memberData.id}/edit`}>
            <Edit className="w-4 h-4 mr-2" />
            Edit Profile
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Information */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-[#171717]">Personal Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start gap-6">
                <Avatar className="w-20 h-20">
                  <AvatarImage src="/user-profile-illustration.png" />
                  <AvatarFallback className="bg-[#9e56ff] text-white text-xl">JD</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-[#171717] mb-2">{memberData.name}</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2 text-[#4b4b4b]">
                      <Mail className="w-4 h-4 text-[#919499]" />
                      {memberData.email}
                    </div>
                    <div className="flex items-center gap-2 text-[#4b4b4b]">
                      <Phone className="w-4 h-4 text-[#919499]" />
                      {memberData.phone}
                    </div>
                    <div className="flex items-center gap-2 text-[#4b4b4b]">
                      <MapPin className="w-4 h-4 text-[#919499]" />
                      {memberData.address}
                    </div>
                    <div className="flex items-center gap-2 text-[#4b4b4b]">
                      <Calendar className="w-4 h-4 text-[#919499]" />
                      Joined {memberData.joinDate}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Trainings Attended */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-[#171717]">Trainings Attended</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {memberData.trainingsAttended.map((training, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-[#f4f6fa] rounded-lg">
                    <div>
                      <h4 className="font-medium text-[#171717]">{training.name}</h4>
                      <p className="text-sm text-[#919499]">{training.date}</p>
                    </div>
                    <Badge
                      variant={training.status === "Completed" ? "default" : "secondary"}
                      className={
                        training.status === "Completed"
                          ? "bg-[#61c556] hover:bg-[#61c556] text-white"
                          : training.status === "In Progress"
                            ? "bg-[#fcba2d] hover:bg-[#fcba2d] text-white"
                            : "bg-[#c4c4c4] hover:bg-[#c4c4c4] text-[#4b4b4b]"
                      }
                    >
                      {training.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Status */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-[#171717]">Status</CardTitle>
            </CardHeader>
            <CardContent>
              <Badge variant="default" className="bg-[#61c556] hover:bg-[#61c556] text-white text-sm px-3 py-1">
                {memberData.status}
              </Badge>
            </CardContent>
          </Card>

          {/* Ministries */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-[#171717]">Ministries</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {memberData.ministries.map((ministry, index) => (
                <div key={index} className="p-4 bg-[#f4f6fa] rounded-lg">
                  <h4 className="font-medium text-[#171717]">{ministry.name}</h4>
                  <p className="text-sm text-[#919499]">{ministry.role}</p>
                  <p className="text-xs text-[#919499] mt-1">Since {ministry.since}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-[#171717]">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button
                variant="outline"
                className="w-full border-[#e4e4e4] text-[#4b4b4b] hover:bg-[#f4f6fa] bg-transparent"
              >
                Send Message
              </Button>
              <Button className="w-full bg-[#fcba2d] hover:bg-[#fcc547] text-white">Add to Training</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
