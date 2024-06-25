import { Project, getBadgeVariant } from "@/types/project"
import { Badge } from "../ui/badge"
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card"

type ProjectCardProps = {
  project: Project
}

export default function ProjectCard({
  project: { id, status, url },
}: ProjectCardProps) {
  return (
    <Card className="w-[300px] cursor-pointer">
      <CardHeader>
        <CardTitle className="flex gap-2 items-center text-xl">
          {id}
          <Badge variant={getBadgeVariant(status)}>
            {status}
          </Badge>
        </CardTitle>

        <CardDescription>
          {url}
        </CardDescription>
      </CardHeader>
    </Card>
  )
}
