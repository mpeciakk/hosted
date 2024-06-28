import CardContainer from "@/components/CardContainer"
import { AddProjectModal } from "@/components/project/create-project-modal"
import ProjectCard from "@/components/project/project-card"
import { getProjects } from "@/lib/project"
import Link from "next/link"

export default async function Projects() {
  const projects = await getProjects()

  return (
    <CardContainer>
      <AddProjectModal />

      {projects.map((project, i) => (
        <Link key={i} href={`/projects/${project.name}/general`}>
          <ProjectCard project={project} />
        </Link>
      ))}
    </CardContainer>
  )
}
