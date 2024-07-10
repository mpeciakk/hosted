"use client"

import Modal from "../modal"
import { z } from "zod"
import { createNode } from "@/lib/node"

const formSchema = z.object({
  name: z.string({
    required_error: "Name is required.",
  }),

  url: z.string({
    required_error: "Url is required.",
  }),
})

export function CreateNodeModal() {
  return (
    <Modal
      title="Create node"
      description="Node in which project may be deployed"
      form={formSchema}
      onSubmit={createNode}
    />
  )
}
