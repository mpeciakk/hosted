import { Node } from "@/types/node"
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card"

type NodeCardProps = {
  node: Node
}

export default function NodeCard({ node: { name, url } }: NodeCardProps) {
  return (
    <Card className="card">
      <CardHeader>
        <CardTitle className="text-xl">
          {name}
        </CardTitle>

        <CardDescription>{url}</CardDescription>
      </CardHeader>
    </Card>
  )
}
