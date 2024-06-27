import { AddProjectModal } from "@/components/project/add-project-modal"
import ProjectCard from "@/components/project/project-card"
import { getProjects } from "@/lib/project"
import Link from "next/link"

export default async function Projects() {
  const projects = await getProjects()

  return (
    <main>
      <div className="flex gap-4 flex-wrap">
        <AddProjectModal />

        {projects.map((project, i) => (
          <Link key={i} href={`/projects/${project.name}`}>
            <ProjectCard project={project} />
          </Link>
        ))}
      </div>
    </main>
  )
}
