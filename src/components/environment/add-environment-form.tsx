"use client"
import AutoForm, { AutoFormSubmit } from "@/components/ui/auto-form"
import { createEnvironmentTemplate } from "@/lib/environment"
import * as z from "zod"

const formSchema = z.object({
  name: z.string({
    required_error: "Id is required.",
  }),

  branch: z.string({
    required_error: "Branch is required.",
  }),

  domain: z.string({
    required_error: "Domain is required.",
  }),
})

type AddEnvironmentFormProps = {
  setOpen: (state: boolean) => void
}

export default function AddEnvironmentForm({
  setOpen,
}: AddEnvironmentFormProps) {
  function onSubmit(data: z.infer<typeof formSchema>) {
    createEnvironmentTemplate(data)
    setOpen(false)
  }

  return (
    <AutoForm onSubmit={onSubmit} formSchema={formSchema}>
      <AutoFormSubmit>Create</AutoFormSubmit>
    </AutoForm>
  )
}
