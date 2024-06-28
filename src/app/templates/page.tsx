import CardContainer from "@/components/CardContainer"
import { CreateEnvironmentModal } from "@/components/environment/create-environment-modal"
import EnvironmentCard from "@/components/environment/environment-card"
import { getEnvironmentTemplates } from "@/lib/environment"
import Link from "next/link"

export default async function Templates() {
  const templates = await getEnvironmentTemplates()

  return (
    <CardContainer>
      <CreateEnvironmentModal />

      {templates.map((environment, i) => (
        <Link key={i} href={`/templates/${environment.name}`}>
          <EnvironmentCard environment={environment} />
        </Link>
      ))}
    </CardContainer>
  )
}
