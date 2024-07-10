import Card from "@/components/card"
import CardContainer from "@/components/card-container"
import { CreateDeploymentModal } from "@/components/deployment/create-deployment-modal"
import { getDeployments } from "@/lib/deployment"
import { getEnvironments } from "@/lib/environment"
import { getNodes } from "@/lib/node"

type ProjectDeploymentsPageProps = {
  params: {
    name: string
  }
}

export default async function ProjectDeployments({
  params: { name },
}: ProjectDeploymentsPageProps) {
  const environments = await getEnvironments(name)
  const nodes = await getNodes()
  const deployments = await getDeployments(name)

  return (
    <CardContainer>
      <CreateDeploymentModal
        environments={environments}
        nodes={nodes}
        project={name}
      />

      {deployments.map((deployment, i) => (
        <Card
          title={deployment.project}
          description={`${deployment.environment} on node ${deployment.node}`}
          key={i}
        />
      ))}
    </CardContainer>
  )
}
