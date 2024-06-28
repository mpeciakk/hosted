"use client"
import AutoForm, { AutoFormSubmit } from "@/components/ui/auto-form"
import { createProject } from "@/lib/project"
import * as z from "zod"

const formSchema = z.object({
  name: z.string({
    required_error: "Id is required.",
  }),

  url: z.string({
    required_error: "Url is required.",
  }),
})

type CreateProjectFormProps = {
  setOpen: (state: boolean) => void
}

export default function CreateProjectForm({ setOpen }: CreateProjectFormProps) {
  function onSubmit(data: z.infer<typeof formSchema>) {
    createProject(data.name, data.url)
    setOpen(false)
  }

  return (
    <AutoForm onSubmit={onSubmit} formSchema={formSchema}>
      <AutoFormSubmit>Create</AutoFormSubmit>
    </AutoForm>
  )
}
