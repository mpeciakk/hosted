import CardContainer from "@/components/CardContainer"
import CreateProjectModal from "@/components/project/create-project-modal"
import ProjectCard from "@/components/project/project-card"
import { getProjects } from "@/lib/project"
import Link from "next/link"

export const dynamic = 'force-dynamic'

export default async function Projects() {
  const projects = await getProjects()

  return (
    <CardContainer>
      <CreateProjectModal />

      {projects.map((project, i) => (
        <Link key={i} href={`/projects/${project.name}/settings`}>
          <ProjectCard project={project} />
        </Link>
      ))}
    </CardContainer>
  )
}
