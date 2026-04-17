"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";

const QUEST_CATEGORIES = [
  {
    title: "Web Development",
    description: "웹사이트, 프론트엔드, 백엔드, 풀스택 관련 퀘스트",
    route: "/quests/web-development",
    featured: true,
  },
  {
    title: "Mobile Development",
    description: "iOS, Android, React Native 기반 모바일 앱 퀘스트",
    route: "/quests/mobile-development",
  },
  {
    title: "Software Development",
    description: "데스크톱 프로그램, 시스템 개발, 기타 소프트웨어 퀘스트",
    route: "/quests/software-development",
  },
  {
    title: "WordPress Development",
    description: "워드프레스 구축, 커스터마이징, 유지보수 퀘스트",
    route: "/quests/wordpress-development",
  },
];

const MY_PAGE_LINKS = [
  { label: "대시보드", href: "/dashboard" },
  { label: "나의 제출", href: "/dashboard/submissions" },
  { label: "수익 내역", href: "/dashboard" },
  { label: "프로필 설정", href: "/dashboard" },
];

export function GlobalNav({ isLoggedIn = false }: { isLoggedIn?: boolean }) {
  const [isQuestsOpen, setIsQuestsOpen] = useState(false);
  const [isMyPageOpen, setIsMyPageOpen] = useState(false);

  const questsCloseRef = useRef<NodeJS.Timeout | null>(null);
  const myPageCloseRef = useRef<NodeJS.Timeout | null>(null);

  const makeEnter =
    (
      setter: (v: boolean) => void,
      timerRef: React.MutableRefObject<NodeJS.Timeout | null>,
    ) =>
    () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
      setter(true);
    };

  const makeLeave =
    (
      setter: (v: boolean) => void,
      timerRef: React.MutableRefObject<NodeJS.Timeout | null>,
    ) =>
    () => {
      timerRef.current = setTimeout(() => setter(false), 150);
    };

  const [nickname, setNickname] = useState<string | null>(null);

  useEffect(() => {
    setNickname(localStorage.getItem("nickname"));
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background">
      <nav className="mx-auto flex max-w-content items-center justify-between px-4 py-4 sm:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded bg-primary font-bold text-primary-foreground">
            Q
          </div>
          <span className="hidden font-bold text-foreground sm:inline">
            QuestWork
          </span>
        </Link>

        {/* Center nav links */}
        <div className="flex items-center gap-6">
          {/* Quests dropdown */}
          <div
            className="relative"
            onMouseEnter={makeEnter(setIsQuestsOpen, questsCloseRef)}
            onMouseLeave={makeLeave(setIsQuestsOpen, questsCloseRef)}
          >
            <button
              onClick={() => setIsQuestsOpen((o) => !o)}
              className="text-sm font-medium text-foreground transition-colors hover:text-primary"
            >
              Quests
            </button>

            {isQuestsOpen && (
              <div className="absolute left-0 top-full w-80 rounded-lg border border-border bg-background shadow-lg">
                <div className="p-4">
                  {QUEST_CATEGORIES.map((category) => (
                    <Link
                      key={category.route}
                      href={category.route}
                      onClick={() => setIsQuestsOpen(false)}
                      className={`block rounded-lg p-3 transition-colors ${
                        category.featured
                          ? "bg-primary-light"
                          : "hover:bg-surface"
                      }`}
                    >
                      <div
                        className={`text-sm font-semibold ${category.featured ? "text-primary" : "text-foreground"}`}
                      >
                        {category.title}
                      </div>
                      <div className="mt-1 text-xs text-foreground-muted">
                        {category.description}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* My Page dropdown — logged-in only */}
          {isLoggedIn && (
            <div
              className="relative"
              onMouseEnter={makeEnter(setIsMyPageOpen, myPageCloseRef)}
              onMouseLeave={makeLeave(setIsMyPageOpen, myPageCloseRef)}
            >
              <button
                onClick={() => setIsMyPageOpen((o) => !o)}
                className="text-sm font-medium text-foreground transition-colors hover:text-primary"
              >
                My Page
              </button>

              {isMyPageOpen && (
                <div className="absolute left-0 top-full w-48 rounded-lg border border-border bg-background shadow-lg">
                  <div className="py-1">
                    {MY_PAGE_LINKS.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={() => setIsMyPageOpen(false)}
                        className="block px-4 py-2.5 text-sm text-foreground transition-colors hover:bg-surface hover:text-primary"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Right side actions */}
        <div className="flex items-center gap-2">
          {nickname ? (
            <>
              <span className="text-sm font-medium text-foreground">
                {nickname}님
              </span>
              <Button
                variant="outline"
                className="text-xs sm:text-sm border-border"
                onClick={() => {
                  localStorage.removeItem("nickname");
                  setNickname(null);
                }}
              >
                로그아웃
              </Button>
            </>
          ) : (
            <>
              <Button
                variant="outline"
                className="text-xs sm:text-sm border-border transition-all duration-200 hover:border-primary hover:text-primary hover:shadow-[0_0_0_2px_var(--primary-light)]"
                asChild
              >
                <Link href="/login">Sign In</Link>
              </Button>
              <Button className="bg-primary text-xs text-primary-foreground hover:bg-primary-hover sm:text-sm">
                Post Quest
              </Button>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
