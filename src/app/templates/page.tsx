import { AddEnvironmentModal } from "@/components/environment/add-environment-modal"
import EnvironmentCard from "@/components/environment/environment-card"
import { getEnvironmentTemplates } from "@/lib/environment"
import Link from "next/link"

export default async function Templates() {
  const templates = await getEnvironmentTemplates()

  return (
    <main>
      <div className="flex gap-4 flex-wrap">
        <AddEnvironmentModal />

        {templates.map((environment, i) => (
          <Link key={i} href={`/templates/${environment.name}`}>
            <EnvironmentCard environment={environment} />
          </Link>
        ))}
      </div>
    </main>
  )
}
