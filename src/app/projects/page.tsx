import Card from "@/components/card"
import CardContainer from "@/components/card-container"
import CreateProjectModal from "@/components/project/create-project-modal"
import { Badge } from "@/components/ui/badge"
import { getProjects } from "@/lib/project"
import { getBadgeVariant } from "@/types/project"
import Link from "next/link"

export const dynamic = "force-dynamic"

export default async function Projects() {
  const projects = await getProjects()

  return (
    <CardContainer>
      <CreateProjectModal />

      {projects.map((project, i) => (
        <Link key={i} href={`/projects/${project.name}/settings`}>
          <Card
            title={
              <div className="flex items-center gap-2">
                {project.name}
                <Badge variant={getBadgeVariant(project.status)}>
                  {project.status}
                </Badge>
              </div>
            }
            description={project.url}
          />
        </Link>
      ))}
    </CardContainer>
  )
}
