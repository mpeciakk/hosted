import { EnvironmentTemplate } from "@/types/environment"
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card"

type EnvironmentCardProps = {
  environment: EnvironmentTemplate
}

export default function EnvironmentCard({
  environment: { name, branch, domain },
}: EnvironmentCardProps) {
  return (
    <Card className="card">
      <CardHeader>
        <CardTitle className="text-xl">
          {name}
        </CardTitle>

        <CardDescription>{domain} on branch {branch}</CardDescription>
      </CardHeader>
    </Card>
  )
}
