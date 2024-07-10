import Card from "@/components/card"
import CardContainer from "@/components/card-container"
import { CreateNodeModal } from "@/components/node/create-node-modal"
import { getNodes } from "@/lib/node"
import Link from "next/link"

export default async function Nodes() {
  const nodes = await getNodes()

  return (
    <CardContainer>
      <CreateNodeModal />

      {nodes.map((node, i) => (
        <Link key={i} href={`/nodes/${node.name}`}>
          <Card title={node.name} description={node.url} />
        </Link>
      ))}
    </CardContainer>
  )
}
