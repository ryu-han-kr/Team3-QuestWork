'use client'

import { GlobalNav } from '@/components/global-nav'
import { QuestCard, type Quest } from '@/components/quest-card'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

interface FreelancerProfile {
  username: string
  name: string
  profileImage: string
  bio: string
  experienceLevel: string
  completedQuestsCount: number
  totalEarnings: string
  techStack: string[]
  completedQuests: Quest[]
  blogPosts: Array<{
    id: string
    title: string
    excerpt: string
    date: string
    readTime: string
  }>
}

const MOCK_PROFILE: FreelancerProfile = {
  username: 'kim-dev',
  name: '김개발',
  profileImage: 'https://api.dicebear.com/7.x/avataaars/svg?seed=kim-dev',
  bio: '3년 경력의 풀스택 개발자입니다. React, Node.js, Python을 주로 사용하며, 다양한 프로젝트 경험이 있습니다.',
  experienceLevel: 'Senior',
  completedQuestsCount: 24,
  totalEarnings: '₩8,450,000',
  techStack: ['React', 'Next.js', 'Java', 'Spring', 'Node.js', 'Python'],
  completedQuests: [
    {
      id: '1',
      title: 'React Admin Dashboard Performance Optimization',
      description:
        'Improved rendering performance and reduced bundle size in a React admin dashboard.',
      techStack: ['React', 'Next.js', 'TypeScript'],
      reward: '₩1,000,000',
      deadline: '완료',
      participants: 15,
    },
    {
      id: '2',
      title: 'REST API for Microservices Architecture',
      description:
        'Designed and implemented a robust REST API with authentication, rate limiting, and comprehensive documentation.',
      techStack: ['Node.js', 'Express', 'MongoDB'],
      reward: '₩1,500,000',
      deadline: '완료',
      participants: 22,
    },
    {
      id: '3',
      title: 'Spring Boot REST Service',
      description:
        'Built a scalable Spring Boot application with database integration, caching, and API documentation.',
      techStack: ['Java', 'Spring', 'PostgreSQL'],
      reward: '₩1,200,000',
      deadline: '완료',
      participants: 18,
    },
    {
      id: '4',
      title: 'Next.js E-commerce Platform',
      description:
        'Built a full-stack e-commerce platform with payment integration, product management, and order tracking.',
      techStack: ['Next.js', 'React', 'Stripe'],
      reward: '₩2,500,000',
      deadline: '완료',
      participants: 28,
    },
  ],
  blogPosts: [
    {
      id: '1',
      title: 'Next.js 14 새로운 기능 살펴보기',
      excerpt:
        'Next.js 14에서 도입된 새로운 기능들과 성능 개선사항을 자세히 알아봅시다. App Router의 발전된 기능들을 소개합니다.',
      date: '2024-04-10',
      readTime: '8분',
    },
    {
      id: '2',
      title: 'React 성능 최적화 팁 5가지',
      excerpt:
        '웹 애플리케이션의 성능을 향상시키기 위한 실용적인 React 최적화 기법들을 배워봅시다.',
      date: '2024-04-05',
      readTime: '10분',
    },
    {
      id: '3',
      title: 'TypeScript 고급 타입 가이드',
      excerpt:
        'Generic, Union, Intersection 등 TypeScript의 고급 타입 기능을 마스터해봅시다.',
      date: '2024-03-28',
      readTime: '12분',
    },
  ],
}

export default function ProfilePage({
  params,
}: {
  params: { username: string }
}) {
  const profile = MOCK_PROFILE

  return (
    <div className="min-h-screen bg-background">
      <GlobalNav />

      <main>
        {/* Profile Header Section */}
        <section className="border-b border-border bg-surface px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="flex flex-col gap-8 md:flex-row md:items-start md:gap-6">
              {/* Profile Image */}
              <div className="flex-shrink-0">
                <img
                  src={profile.profileImage}
                  alt={profile.name}
                  className="h-32 w-32 rounded-full border-4 border-primary shadow-lg"
                />
              </div>

              {/* Profile Info */}
              <div className="flex-1">
                <div className="mb-4 flex items-start justify-between">
                  <div>
                    <h1 className="text-4xl font-bold text-foreground">
                      {profile.name}
                    </h1>
                    <p className="mt-1 text-foreground-muted">
                      @{profile.username}
                    </p>
                  </div>
                  <Badge className="bg-primary text-primary-foreground">
                    {profile.experienceLevel}
                  </Badge>
                </div>

                {/* Bio */}
                <p className="max-w-2xl text-foreground-muted">{profile.bio}</p>

                {/* Stats */}
                <div className="mt-6 flex flex-wrap gap-6">
                  <div>
                    <p className="text-sm text-foreground-muted">
                      완료한 퀘스트
                    </p>
                    <p className="text-2xl font-bold text-foreground">
                      {profile.completedQuestsCount}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-foreground-muted">총 수익</p>
                    <p className="text-2xl font-bold text-primary">
                      {profile.totalEarnings}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Grid */}
        <div className="px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="space-y-12">
              {/* Tech Stack Section */}
              <section>
                <h2 className="mb-6 text-2xl font-bold text-foreground">
                  기술 스택
                </h2>
                <div className="flex flex-wrap gap-3">
                  {profile.techStack.map((tech) => (
                    <Badge
                      key={tech}
                      className="bg-secondary text-secondary-foreground"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </section>

              {/* Quest Achievements Section */}
              <section>
                <h2 className="mb-6 text-2xl font-bold text-foreground">
                  완료한 퀘스트
                </h2>
                <div className="grid gap-6 md:grid-cols-2">
                  {profile.completedQuests.map((quest) => (
                    <QuestCard key={quest.id} quest={quest} />
                  ))}
                </div>
              </section>

              {/* Portfolio Blog Section */}
              <section>
                <h2 className="mb-6 text-2xl font-bold text-foreground">
                  포트폴리오 블로그
                </h2>
                <div className="space-y-4">
                  {profile.blogPosts.map((post) => (
                    <Card
                      key={post.id}
                      className="border border-border p-6 transition-all hover:border-primary hover:shadow-md"
                    >
                      <div className="flex flex-col gap-2">
                        <h3 className="text-lg font-semibold text-foreground hover:text-primary">
                          {post.title}
                        </h3>
                        <p className="text-sm text-foreground-muted">
                          {post.excerpt}
                        </p>
                        <div className="mt-3 flex items-center justify-between text-xs text-foreground-subtle">
                          <span>{post.date}</span>
                          <span>{post.readTime} 읽기</span>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </section>

              {/* Earnings Summary Section */}
              <section>
                <h2 className="mb-6 text-2xl font-bold text-foreground">
                  수익 요약
                </h2>
                <Card className="border border-border bg-primary p-8 text-primary-foreground">
                  <div className="space-y-4">
                    <p className="text-sm opacity-90">총 누적 수익</p>
                    <p className="text-4xl font-bold">
                      {profile.totalEarnings}
                    </p>
                    <p className="text-sm opacity-90">
                      {profile.completedQuestsCount}개의 퀘스트 완료로 얻은 수익입니다.
                    </p>
                  </div>
                </Card>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
