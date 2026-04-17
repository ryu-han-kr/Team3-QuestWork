"use client"

import { useState } from "react"
import { MoreHorizontal, Trash2, Shield, UserCog, User, CheckCircle, XCircle } from "lucide-react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { Card, CardContent } from "@/components/ui/card"
import type { Member, Role, Status } from "@/app/admin/page"

interface MemberTableProps {
  members: Member[]
  onRoleChange: (memberId: string, newRole: Role) => void
  onStatusChange: (memberId: string, newStatus: Status) => void
  onDelete: (memberId: string) => void
}

export function MemberTable({
  members,
  onRoleChange,
  onStatusChange,
  onDelete,
}: MemberTableProps) {
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  const [memberToDelete, setMemberToDelete] = useState<Member | null>(null)

  const handleDeleteClick = (member: Member) => {
    setMemberToDelete(member)
    setDeleteDialogOpen(true)
  }

  const confirmDelete = () => {
    if (memberToDelete) {
      onDelete(memberToDelete.id)
    }
    setDeleteDialogOpen(false)
    setMemberToDelete(null)
  }

  const getRoleBadgeStyle = (role: Role) => {
    switch (role) {
      case "관리자":
        return "bg-primary/10 text-primary hover:bg-primary/20 border-primary/20"
      case "매니저":
        return "bg-amber-50 text-amber-700 hover:bg-amber-100 border-amber-200"
      case "회원":
        return "bg-slate-50 text-slate-700 hover:bg-slate-100 border-slate-200"
    }
  }

  const getStatusBadgeStyle = (status: Status) => {
    switch (status) {
      case "활성화":
        return "bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border-emerald-200"
      case "비활성화":
        return "bg-rose-50 text-rose-700 hover:bg-rose-100 border-rose-200"
    }
  }

  const getRoleIcon = (role: Role) => {
    switch (role) {
      case "관리자":
        return <Shield className="h-3 w-3" />
      case "매니저":
        return <UserCog className="h-3 w-3" />
      case "회원":
        return <User className="h-3 w-3" />
    }
  }

  if (members.length === 0) {
    return (
      <Card className="border-border">
        <CardContent className="flex flex-col items-center justify-center py-16">
          <div className="mb-4 rounded-full bg-muted p-4">
            <User className="h-8 w-8 text-muted-foreground" />
          </div>
          <p className="text-lg font-medium text-foreground">검색 결과가 없습니다</p>
          <p className="text-sm text-muted-foreground">다른 검색어나 필터를 사용해 보세요.</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <>
      <Card className="border-border overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50 hover:bg-muted/50">
              <TableHead className="font-semibold text-foreground">회원 정보</TableHead>
              <TableHead className="font-semibold text-foreground">권한</TableHead>
              <TableHead className="font-semibold text-foreground">상태</TableHead>
              <TableHead className="font-semibold text-foreground">가입일</TableHead>
              <TableHead className="font-semibold text-foreground">최근 접속</TableHead>
              <TableHead className="text-right font-semibold text-foreground">관리</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {members.map((member) => (
              <TableRow key={member.id} className="hover:bg-muted/30">
                <TableCell>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <span className="text-sm font-semibold text-primary">
                        {member.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{member.name}</p>
                      <p className="text-sm text-muted-foreground">{member.email}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className={`gap-1 ${getRoleBadgeStyle(member.role)}`}
                  >
                    {getRoleIcon(member.role)}
                    {member.role}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className={`gap-1 ${getStatusBadgeStyle(member.status)}`}
                  >
                    {member.status === "활성화" ? (
                      <CheckCircle className="h-3 w-3" />
                    ) : (
                      <XCircle className="h-3 w-3" />
                    )}
                    {member.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-muted-foreground">{member.joinDate}</TableCell>
                <TableCell className="text-muted-foreground">{member.lastLogin}</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">메뉴 열기</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-48">
                      <DropdownMenuLabel>회원 관리</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuSub>
                        <DropdownMenuSubTrigger>
                          <Shield className="mr-2 h-4 w-4" />
                          권한 변경
                        </DropdownMenuSubTrigger>
                        <DropdownMenuSubContent>
                          <DropdownMenuItem
                            onClick={() => onRoleChange(member.id, "회원")}
                            className={member.role === "회원" ? "bg-muted" : ""}
                          >
                            <User className="mr-2 h-4 w-4" />
                            회원
                            {member.role === "회원" && " ✓"}
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            onClick={() => onRoleChange(member.id, "매니저")}
                            className={member.role === "매니저" ? "bg-muted" : ""}
                          >
                            <UserCog className="mr-2 h-4 w-4" />
                            매니저
                            {member.role === "매니저" && " ✓"}
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            onClick={() => onRoleChange(member.id, "관리자")}
                            className={member.role === "관리자" ? "bg-muted" : ""}
                          >
                            <Shield className="mr-2 h-4 w-4" />
                            관리자
                            {member.role === "관리자" && " ✓"}
                          </DropdownMenuItem>
                        </DropdownMenuSubContent>
                      </DropdownMenuSub>
                      <DropdownMenuSub>
                        <DropdownMenuSubTrigger>
                          <CheckCircle className="mr-2 h-4 w-4" />
                          상태 변경
                        </DropdownMenuSubTrigger>
                        <DropdownMenuSubContent>
                          <DropdownMenuItem
                            onClick={() => onStatusChange(member.id, "활성화")}
                            className={member.status === "활성화" ? "bg-muted" : ""}
                          >
                            <CheckCircle className="mr-2 h-4 w-4 text-emerald-600" />
                            활성화
                            {member.status === "활성화" && " ✓"}
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            onClick={() => onStatusChange(member.id, "비활성화")}
                            className={member.status === "비활성화" ? "bg-muted" : ""}
                          >
                            <XCircle className="mr-2 h-4 w-4 text-rose-600" />
                            비활성화
                            {member.status === "비활성화" && " ✓"}
                          </DropdownMenuItem>
                        </DropdownMenuSubContent>
                      </DropdownMenuSub>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem
                        onClick={() => handleDeleteClick(member)}
                        className="text-destructive focus:text-destructive"
                      >
                        <Trash2 className="mr-2 h-4 w-4" />
                        회원 삭제
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>

      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>회원을 삭제하시겠습니까?</AlertDialogTitle>
            <AlertDialogDescription>
              {memberToDelete && (
                <>
                  <strong>{memberToDelete.name}</strong> ({memberToDelete.email}) 회원을
                  삭제합니다. 이 작업은 되돌릴 수 없습니다.
                </>
              )}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>취소</AlertDialogCancel>
            <AlertDialogAction
              onClick={confirmDelete}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              삭제
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}
