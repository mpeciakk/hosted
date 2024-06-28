import { Project, getBadgeVariant } from "@/types/project"
import { Badge } from "../ui/badge"
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card"

type ProjectCardProps = {
  project: Project
}

export default function ProjectCard({
  project: { name, status, url },
}: ProjectCardProps) {
  return (
    <Card className="card">
      <CardHeader>
        <CardTitle className="flex gap-2 items-center text-xl">
          {name}
          <Badge variant={getBadgeVariant(status)}>{status}</Badge>
        </CardTitle>

        <CardDescription>{url}</CardDescription>
      </CardHeader>
    </Card>
  )
}
