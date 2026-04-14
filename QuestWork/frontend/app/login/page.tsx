import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-surface px-4">
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="mb-8 flex flex-col items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary font-bold text-primary-foreground text-lg">
              Q
            </div>
            <span className="text-xl font-bold text-foreground">QuestWork</span>
          </Link>
          <p className="text-sm text-muted-foreground">계정에 로그인하세요</p>
        </div>

        {/* Card */}
        <div className="rounded-xl border border-border bg-background p-8 shadow-sm">
          <h1 className="mb-6 text-xl font-semibold text-foreground">Sign In</h1>

          <form className="space-y-4">
            <div className="space-y-1.5">
              <Label htmlFor="email" className="text-sm font-medium text-foreground">
                이메일
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="example@email.com"
                className="transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className="text-sm font-medium text-foreground">
                  비밀번호
                </Label>
                <a href="#" className="text-xs text-primary hover:underline">
                  비밀번호 찾기
                </a>
              </div>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                className="transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-primary text-primary-foreground transition-all duration-200 hover:bg-primary-hover hover:shadow-md"
            >
              로그인
            </Button>
          </form>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            계정이 없으신가요?{' '}
            <a href="#" className="font-medium text-primary hover:underline">
              회원가입
            </a>
          </p>
        </div>
      </div>
    </main>
  )
}
