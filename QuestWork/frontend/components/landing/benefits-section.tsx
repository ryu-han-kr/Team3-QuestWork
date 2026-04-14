'use client'

export function BenefitsSection() {
  const freelancerBenefits = [
    {
      icon: '🎯',
      title: '퀘스트 참여',
      description: '다양한 프로젝트에 참여하고 자신의 기술을 보여주세요.',
    },
    {
      icon: '📁',
      title: '포트폴리오 구축',
      description: '완료한 프로젝트로 강력한 포트폴리오를 만드세요.',
    },
    {
      icon: '💰',
      title: '보상 획득',
      description: '최고의 솔루션을 제공하면 즉시 보상을 받습니다.',
    },
    {
      icon: '📝',
      title: '기술 블로그 운영',
      description: '기술 지식을 공유하고 커뮤니티와 소통하세요.',
    },
  ]

  const companyBenefits = [
    {
      icon: '🔍',
      title: '다양한 결과물 비교',
      description: '여러 프리랜서의 솔루션을 비교하고 최고의 것을 선택하세요.',
    },
    {
      icon: '⚡',
      title: '빠른 문제 해결',
      description: '경쟁을 통해 가장 효율적인 솔루션을 빠르게 얻습니다.',
    },
    {
      icon: '✨',
      title: '검증된 개발자 발견',
      description: '실력 있는 프리랜서를 찾고 장기적인 파트너십을 구축하세요.',
    },
  ]

  return (
    <section className="bg-background px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Freelancers Section */}
        <div className="mb-24">
          <div className="mb-12 flex flex-col items-center text-center">
            <h2 className="text-balance text-4xl font-bold text-foreground">
              프리랜서를 위한 혜택
            </h2>
            <p className="mt-4 text-lg text-foreground-muted">
              자신의 기술로 수익을 얻고 경력을 쌓으세요
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {freelancerBenefits.map((benefit, idx) => (
              <div
                key={idx}
                className="rounded-lg border border-border bg-surface p-6 transition-all hover:shadow-md"
              >
                <div className="mb-3 text-4xl">{benefit.icon}</div>
                <h3 className="mb-2 font-semibold text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-sm text-foreground-muted">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="my-16 border-t border-border" />

        {/* Companies Section */}
        <div>
          <div className="mb-12 flex flex-col items-center text-center">
            <h2 className="text-balance text-4xl font-bold text-foreground">
              기업을 위한 혜택
            </h2>
            <p className="mt-4 text-lg text-foreground-muted">
              최고의 개발자와 최적의 솔루션을 찾으세요
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {companyBenefits.map((benefit, idx) => (
              <div
                key={idx}
                className="rounded-lg border border-border bg-surface p-6 transition-all hover:shadow-md"
              >
                <div className="mb-3 text-4xl">{benefit.icon}</div>
                <h3 className="mb-2 font-semibold text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-sm text-foreground-muted">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
