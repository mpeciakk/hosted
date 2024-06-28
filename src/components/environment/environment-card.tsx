import { EnvironmentTemplate } from "@/types/environment"
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card"

type EnvironmentCardProps = {
  environment: EnvironmentTemplate
}

export default function EnvironmentCard({
  environment: { name, branch, domain },
}: EnvironmentCardProps) {
  return (
    <Card className="w-[300px]">
      <CardHeader>
        <CardTitle className="flex gap-2 items-center text-xl">
          {name}
        </CardTitle>

        <CardDescription>{branch}</CardDescription>
      </CardHeader>
    </Card>
  )
}