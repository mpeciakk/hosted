"use client"

import { createDeployment } from "@/lib/deployment"
import { Environment } from "@/types/environment"
import { Node } from "@/types/node"
import { z } from "zod"
import Modal from "../modal"

type CreateDeploymentModalProps = {
  environments: Environment[]
  nodes: Node[]
  project: string
}

function z_enumFromArray(array: string[]) {
  return z.enum([array[0], ...array.slice(1)])
}

export function CreateDeploymentModal({
  environments,
  nodes,
  project,
}: CreateDeploymentModalProps) {
  const formSchema = z.object({
    project: z
      .string({
        required_error: "Name is required.",
      })
      .default(project),

    environment: z_enumFromArray(
      environments.map((environment) => environment.name)
    ),

    node: z_enumFromArray(nodes.map((node) => node.name)),
  })

  return (
    <Modal
      title="Deploy project"
      description="Deploy project to specific node"
      form={formSchema}
      onSubmit={createDeployment}
    />
  )
}
