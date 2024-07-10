"use client"

import { useState } from "react"
import { z } from "zod"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog"
import { Card } from "./ui/card"
import { FolderPlus } from "lucide-react"
import AutoForm, { AutoFormSubmit } from "./ui/auto-form"

type ModalProps<T extends z.AnyZodObject> = {
  title: string
  description: string
  form: T
  onSubmit: (data: z.infer<T>) => void
}

export default function Modal<T extends z.AnyZodObject>({
  title,
  description,
  form,
  onSubmit,
}: ModalProps<T>) {
  const [open, setOpen] = useState(false)

  function _onSubmit(data: z.infer<T>) {
    setOpen(false)
    onSubmit(data)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Card className="w-[300px] min-h-[102px] cursor-pointer flex items-center justify-center">
          <FolderPlus className="w-12 h-12" />
        </Card>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>

        <AutoForm onSubmit={_onSubmit} formSchema={form}>
          <AutoFormSubmit>Create</AutoFormSubmit>
        </AutoForm>
      </DialogContent>
    </Dialog>
  )
}
