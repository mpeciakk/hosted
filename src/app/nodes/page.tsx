import CardContainer from "@/components/CardContainer"
import { CreateNodeModal } from "@/components/node/create-node-modal"
import NodeCard from "@/components/node/node-card"
import { getNodes } from "@/lib/node"
import Link from "next/link"

export default async function Nodes() {
  const nodes = await getNodes()

  return (
    <CardContainer>
      <CreateNodeModal />

      {nodes.map((node, i) => (
        <Link key={i} href={`/nodes/${node.name}`}>
          <NodeCard node={node} />
        </Link>
      ))}
    </CardContainer>
  )
}
