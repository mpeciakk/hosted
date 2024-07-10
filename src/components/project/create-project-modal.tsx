"use client"

import Modal from "../modal"
import { z } from "zod"
import { createProject } from "@/lib/project"

const formSchema = z.object({
  name: z.string({
    required_error: "Name is required.",
  }),

  url: z.string({
    required_error: "Url is required.",
  }),
})

export default function CreateProjectModal() {
  return (
    <Modal
      title="Create project"
      description=""
      form={formSchema}
      onSubmit={(data) => createProject({ ...data, status: "in progress" })}
    />
  )
}
