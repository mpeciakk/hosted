import Card from "@/components/card"
import CardContainer from "@/components/card-container"
import { CreateEnvironmentModal } from "@/components/environment/create-environment-modal"
import { getEnvironmentTemplates } from "@/lib/environment"
import Link from "next/link"

export const dynamic = "force-dynamic"

export default async function Templates() {
  const templates = await getEnvironmentTemplates()

  return (
    <CardContainer>
      <CreateEnvironmentModal />

      {templates.map((template, i) => (
        <Link key={i} href={`/templates/${template.name}`}>
          <Card
            title={template.name}
            description={`${template.domain} on branch ${template.branch}`}
            key={i}
          />
        </Link>
      ))}
    </CardContainer>
  )
}
