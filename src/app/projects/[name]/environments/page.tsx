import Card from "@/components/card"
import CardContainer from "@/components/card-container"
import { CreateProjectEnvironmentModal } from "@/components/project/environment/create-project-environment-modal"
import { getEnvironmentTemplates, getEnvironments } from "@/lib/environment"

type ProjectEnvironmentsPageProps = {
  params: {
    name: string
  }
}

export default async function ProjectEnvironments({
  params: { name },
}: ProjectEnvironmentsPageProps) {
  const templates = await getEnvironmentTemplates()
  const environments = await getEnvironments(name)

  return (
    <CardContainer>
      <CreateProjectEnvironmentModal project={name} templates={templates} />

      {environments.map((environment, i) => (
        <Card
          title={environment.name}
          description={`${environment.domain} on branch ${environment.branch}`}
          key={i}
        />
      ))}
    </CardContainer>
  )
}
