'use client'

export function HowItWorksSection() {
  const steps = [
    {
      number: '1',
      title: '기업이 퀘스트를 등록합니다',
      description: '문제를 설명하고 보상을 제시합니다.',
    },
    {
      number: '2',
      title: '프리랜서들이 참여합니다',
      description: '자신의 기술로 문제를 해결하기 위해 참여합니다.',
    },
    {
      number: '3',
      title: '결과물을 제출합니다',
      description: '완성된 솔루션을 제출합니다.',
    },
    {
      number: '4',
      title: '기업이 최종 결과물을 선택합니다',
      description: '최고의 결과물에 보상을 지급합니다.',
    },
  ]

  return (
    <section className="border-t border-border bg-surface px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-16 flex flex-col items-center text-center">
          <h2 className="text-balance text-4xl font-bold text-foreground sm:text-5xl">
            QuestWork는 어떻게 작동할까요?
          </h2>
          <p className="mt-4 text-lg text-foreground-muted">
            간단한 4단계로 최고의 결과를 얻으세요
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center gap-4 rounded-lg border border-border bg-background p-6"
            >
              {/* Step Number */}
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                {step.number}
              </div>

              {/* Content */}
              <div className="flex flex-col items-center gap-2 text-center">
                <h3 className="font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="text-sm text-foreground-muted">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
