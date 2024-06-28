"use client"
import AutoForm, { AutoFormSubmit } from "@/components/ui/auto-form"
import { createEnvironment } from "@/lib/environment"
import { EnvironmentTemplate } from "@/types/environment"
import * as z from "zod"

type CreateProjectEnvironmentFormProps = {
  setOpen: (state: boolean) => void
  template: EnvironmentTemplate | null
  project: string
}

export default function CreateProjectEnvironmentForm({
  setOpen,
  template,
  project,
}: CreateProjectEnvironmentFormProps) {
  const formSchema = z.object({
    name: z
      .string({
        required_error: "Id is required.",
      })
      .default(template?.name || ""),

    branch: z
      .string({
        required_error: "Branch is required.",
      })
      .default(template?.branch || ""),

    domain: z
      .string({
        required_error: "Domain is required.",
      })
      .default(template?.domain || ""),
  })

  function onSubmit(data: z.infer<typeof formSchema>) {
    setOpen(false)
    createEnvironment(
      {
        ...data,
        variables: [],
      },
      project
    )
  }

  return (
    <AutoForm onSubmit={onSubmit} formSchema={formSchema}>
      <AutoFormSubmit>Create</AutoFormSubmit>
    </AutoForm>
  )
}
