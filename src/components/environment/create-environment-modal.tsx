"use client"

import { z } from "zod"
import Modal from "../modal"
import { createEnvironmentTemplate } from "@/lib/environment"

const formSchema = z.object({
  name: z.string({
    required_error: "Name is required.",
  }),

  branch: z.string({
    required_error: "Branch is required.",
  }),

  domain: z.string({
    required_error: "Domain is required.",
  }),
  
  composeFile: z.string({
    required_error: "Compose file name is required."
  })
})

export function CreateEnvironmentModal() {
  return (
    <Modal
      title="Create environment"
      description="Template for environment in which project may be deployed"
      form={formSchema}
      onSubmit={createEnvironmentTemplate}
    />
  )
}
