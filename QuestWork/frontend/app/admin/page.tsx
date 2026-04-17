"use client"

import { useState } from "react"
import { AdminHeader } from "@/components/admin/admin-header"
import { MemberTable } from "@/components/admin/member-table"
import { MemberStats } from "@/components/admin/member-stats"
import { SearchFilter } from "@/components/admin/search-filter"

export type Role = "회원" | "매니저" | "관리자"
export type Status = "활성화" | "비활성화"

export interface Member {
  id: string
  name: string
  email: string
  role: Role
  status: Status
  joinDate: string
  lastLogin: string
}

const initialMembers: Member[] = [
  {
    id: "1",
    name: "김철수",
    email: "chulsoo@example.com",
    role: "회원",
    status: "활성화",
    joinDate: "2024-01-15",
    lastLogin: "2024-03-20",
  },
  {
    id: "2",
    name: "이영희",
    email: "younghee@example.com",
    role: "매니저",
    status: "활성화",
    joinDate: "2024-02-10",
    lastLogin: "2024-03-19",
  },
  {
    id: "3",
    name: "박민수",
    email: "minsoo@example.com",
    role: "관리자",
    status: "활성화",
    joinDate: "2023-12-01",
    lastLogin: "2024-03-20",
  },
  {
    id: "4",
    name: "정수진",
    email: "soojin@example.com",
    role: "회원",
    status: "비활성화",
    joinDate: "2024-01-20",
    lastLogin: "2024-02-15",
  },
  {
    id: "5",
    name: "최동욱",
    email: "dongwook@example.com",
    role: "회원",
    status: "활성화",
    joinDate: "2024-03-01",
    lastLogin: "2024-03-18",
  },
  {
    id: "6",
    name: "강미영",
    email: "miyoung@example.com",
    role: "매니저",
    status: "활성화",
    joinDate: "2024-02-25",
    lastLogin: "2024-03-20",
  },
  {
    id: "7",
    name: "윤재혁",
    email: "jaehyuk@example.com",
    role: "회원",
    status: "비활성화",
    joinDate: "2024-01-05",
    lastLogin: "2024-01-30",
  },
  {
    id: "8",
    name: "한소희",
    email: "sohee@example.com",
    role: "회원",
    status: "활성화",
    joinDate: "2024-03-10",
    lastLogin: "2024-03-19",
  },
]

export default function AdminPage() {
  const [members, setMembers] = useState<Member[]>(initialMembers)
  const [searchQuery, setSearchQuery] = useState("")
  const [roleFilter, setRoleFilter] = useState<Role | "전체">("전체")
  const [statusFilter, setStatusFilter] = useState<Status | "전체">("전체")

  const filteredMembers = members.filter((member) => {
    const matchesSearch =
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.email.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesRole = roleFilter === "전체" || member.role === roleFilter
    const matchesStatus = statusFilter === "전체" || member.status === statusFilter
    return matchesSearch && matchesRole && matchesStatus
  })

  const handleRoleChange = (memberId: string, newRole: Role) => {
    setMembers((prev) =>
      prev.map((member) =>
        member.id === memberId ? { ...member, role: newRole } : member
      )
    )
  }

  const handleStatusChange = (memberId: string, newStatus: Status) => {
    setMembers((prev) =>
      prev.map((member) =>
        member.id === memberId ? { ...member, status: newStatus } : member
      )
    )
  }

  const handleDeleteMember = (memberId: string) => {
    setMembers((prev) => prev.filter((member) => member.id !== memberId))
  }

  const stats = {
    total: members.length,
    active: members.filter((m) => m.status === "활성화").length,
    inactive: members.filter((m) => m.status === "비활성화").length,
    admins: members.filter((m) => m.role === "관리자").length,
    managers: members.filter((m) => m.role === "매니저").length,
    users: members.filter((m) => m.role === "회원").length,
  }

  return (
    <div className="min-h-screen bg-background">
      <AdminHeader />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">회원 관리</h1>
          <p className="mt-2 text-muted-foreground">
            회원의 권한, 상태를 관리하고 필요시 삭제할 수 있습니다.
          </p>
        </div>

        <MemberStats stats={stats} />

        <SearchFilter
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          roleFilter={roleFilter}
          onRoleFilterChange={setRoleFilter}
          statusFilter={statusFilter}
          onStatusFilterChange={setStatusFilter}
        />

        <MemberTable
          members={filteredMembers}
          onRoleChange={handleRoleChange}
          onStatusChange={handleStatusChange}
          onDelete={handleDeleteMember}
        />
      </main>
    </div>
  )
}
