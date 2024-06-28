import CardContainer from "@/components/CardContainer"
import EnvironmentCard from "@/components/environment/environment-card"
import { CreateProjectEnvironmentModal } from "@/components/project/create-project-environment-modal"
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
        <EnvironmentCard environment={environment} key={i} />
      ))}
    </CardContainer>
  )
}
