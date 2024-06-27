import { ProjectSidebar } from "@/components/project/project-sidebar"

export default function ProjectLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="grid w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <ProjectSidebar />
      <div className="p-4">{children}</div>
    </div>
  )
}
