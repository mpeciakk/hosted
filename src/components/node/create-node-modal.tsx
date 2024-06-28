"use client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Card } from "../ui/card"
import { FolderPlus } from "lucide-react"
import { useState } from "react"
import CreateNodeForm from "./create-node-form"

export function CreateNodeModal() {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Card className="card cursor-pointer flex items-center justify-center">
          <FolderPlus className="w-12 h-12" />
        </Card>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create environment</DialogTitle>
          <DialogDescription>
            Template for environment in which project may be deployed
          </DialogDescription>
        </DialogHeader>

        <CreateNodeForm setOpen={setOpen} />
      </DialogContent>
    </Dialog>
  )
}
