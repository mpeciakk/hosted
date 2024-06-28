"use client"
import AutoForm, { AutoFormSubmit } from "@/components/ui/auto-form"
import { createNode } from "@/lib/node"
import * as z from "zod"

const formSchema = z.object({
  name: z.string({
    required_error: "Name is required.",
  }),

  url: z.string({
    required_error: "Url is required.",
  }),
})

type CreateNodeFormProps = {
  setOpen: (state: boolean) => void
}

export default function CreateNodeForm({ setOpen }: CreateNodeFormProps) {
  function onSubmit(data: z.infer<typeof formSchema>) {
    createNode(data)
    setOpen(false)
  }

  return (
    <AutoForm onSubmit={onSubmit} formSchema={formSchema}>
      <AutoFormSubmit>Create</AutoFormSubmit>
    </AutoForm>
  )
}
