interface PageHeaderProps {
  title: string
  description: string
  badge?: string
  children?: React.ReactNode
}

export function PageHeader({ title, description, badge, children }: PageHeaderProps) {
  return (
    <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          {badge && (
            <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
              {badge}
            </span>
          )}
          <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl text-balance">{title}</h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">{description}</p>
          {children && <div className="mt-8 flex justify-center">{children}</div>}
        </div>
      </div>
    </section>
  )
}
