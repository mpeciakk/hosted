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
import AddProjectForm from "./create-project-form"

export function AddProjectModal() {
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
          <DialogTitle>Create project</DialogTitle>
        </DialogHeader>

        <AddProjectForm setOpen={setOpen} />
      </DialogContent>
    </Dialog>
  )
}
